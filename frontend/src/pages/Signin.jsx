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
        {
          withCredentials: true,
        }
      );
      const token = Cookies.get("token");
      console.log(token);

      if (token) {
        const decodedToken = jwtDecode(token);
        console.log("hi");
        setUser({
          userId: decodedToken.userId,
          initials: decodedToken.initials,
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName,
          email: decodedToken.email,
        });
        console.log("hi");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  }
  return (
    <div className="h-screen w-screen bg-gradient-blue grid grid-cols-12 ">
      <div className="col-span-4 flex flex-col">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="m-5 cursor-pointer"
        >
          <Logo size={8} />
        </div>
        <div className="m-7 text-white font-bold text-6xl">
          Track. Focus. Achieve.
        </div>
        <img src={illustration} className="relative left-48 w-4/5" alt="" />
      </div>
      <div className="col-span-8 bg-white rounded-tl-3xl rounded-bl-3xl flex justify-center">
        <div className="flex flex-col mt-32 w-4/6 max-w-full">
          <div className="flex ">
            <div className="text-3xl font-bold">Login to your Account</div>
          </div>
          <div className="flex mt-10">
            <div className="flex flex-col gap-2 flex-grow">
              <LabeledInput
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    email: e.target.value,
                  });
                }}
                inputname="Email"
              />
              <LabeledInput
                type="password"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    password: e.target.value,
                  });
                }}
                inputname="Password"
              />
              <button
                onClick={sendRequest}
                className="bg-black text-white text-sm font-medium h-11 rounded-md transition-transform duration-150 transform active:scale-95 active:shadow-inner"
              >
                Login
              </button>
              <div className="text-grey text-sm">
                Don't have an account?{" "}
                <span
                  onClick={() => {
                    navigate("/signup");
                  }}
                  className="text-skyblue font-medium cursor-pointer"
                >
                  Sign up
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
