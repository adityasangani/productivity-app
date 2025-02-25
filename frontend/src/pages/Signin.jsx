import React, { useState } from "react";
import illustration from "../assets/illustration.png";
import LabeledInput from "../components/LabeledInput";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { userAtom } from "../store/atoms/atoms";
import { BACKEND_URL } from "../config";
import { jwtDecode } from "jwt-decode";
import { useRecoilState } from "recoil";
import axios from "axios";
import Cookies from "js-cookie";

const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userAtom);
  const [postInputs, setPostInputs] = useState({
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/auth/signin`,
        postInputs,
        { withCredentials: true }
      );
      const token = response.data.token;
      if (token) {
        const decodedToken = jwtDecode(token);
        setUser({
          userId: decodedToken.userId,
          initials: decodedToken.initials,
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName,
          email: decodedToken.email,
        });
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  }

  return (
    <div className="h-screen w-screen bg-gradient-blue flex flex-col lg:grid lg:grid-cols-12">
      {/* Left Section */}
      <div className="lg:col-span-4 flex flex-col items-center lg:items-start p-6">
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer self-start"
        >
          <Logo size={8} />
        </div>
        <div className="mt-5 text-white font-bold text-4xl lg:text-6xl text-center lg:text-left">
          Track. Focus. Achieve.
        </div>
        <img
          src={illustration}
          className="w-4/5 lg:w-3/4 mt-5 lg:mt-10"
          alt="Illustration"
        />
      </div>

      {/* Right Section */}
      <div className="lg:col-span-8 h-full bg-white rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-tl-3xl md:rounded-bl-3xl flex justify-center p-6">
        <div className="flex flex-col w-full max-w-lg">
          <div className="text-3xl font-bold text-center lg:text-left">
            Login to your Account
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <LabeledInput
              onChange={(e) =>
                setPostInputs({ ...postInputs, email: e.target.value })
              }
              inputname="Email"
            />
            <LabeledInput
              type="password"
              onChange={(e) =>
                setPostInputs({ ...postInputs, password: e.target.value })
              }
              inputname="Password"
            />
            <button
              onClick={sendRequest}
              className="bg-black text-white text-sm font-medium h-11 rounded-md transition-transform duration-150 transform active:scale-95 active:shadow-inner"
            >
              Login
            </button>
            <div className="text-grey text-sm text-center lg:text-left">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-skyblue font-medium cursor-pointer"
              >
                Sign up
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
