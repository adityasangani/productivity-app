import { useNavigate } from "react-router-dom";
import hands from "../assets/hands.png";
import community from "../assets/community.jpg";
import { YellowButton } from "../components/YellowButton";

const CtaLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center bg-amber-50 px-6 md:px-32 py-12">
      {/* Left Block - Text Section */}
      <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
        <div className="text-xl text-grey font-bold">Stay on track</div>
        <div className="my-5 text-3xl md:text-4xl font-bold">
          Join Our Community of Achievers
        </div>
        <div className="mt-2 text-lg">
          Sign up to unlock advanced features, track your habits, and see your
          productivity soar. Already a member? Sign in to continue your journey.
        </div>
        <div
          onClick={() => navigate("/signup")}
          className="mt-8 flex justify-center md:justify-start"
        >
          <YellowButton text={"Join Now"} />
        </div>
        <div className="mt-6">
          Already a Member?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="text-buttonYellow hover:text-buttonYellowHover font-semibold cursor-pointer"
          >
            Sign in
          </span>
        </div>
      </div>

      {/* Right Block - Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          className="w-full md:mt-36  md:mx-0 mx-auto"
          src={community}
          alt="Join Community"
        />
      </div>
    </div>
  );
};

export default CtaLanding;
