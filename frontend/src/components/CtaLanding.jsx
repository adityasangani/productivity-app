import { useNavigate } from "react-router-dom";
import hands from "../assets/hands.png";
import { YellowButton } from "../components/YellowButton";

const CtaLanding = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex bg-amber-50">
      {/* first block */}
      <div className="flex flex-col my-12  mx-32 w-full ">
        <div>
          <div className="text-xl text-grey font-bold">Stay on track</div>
        </div>
        <div className="my-5">
          <div className="text-4xl font-bold">
            Join Our Community of Achievers
          </div>
        </div>
        <div className="flex mt-2 text-lg">
          <div>
            Sign up to unlock advanced features, track your habits, and see your
            productivity soar. Already a member? Sign in to continue your
            journey.
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/signup");
          }}
          className="mt-10"
        >
          <YellowButton text={"Join Now"} />
        </div>
        <div className="mt-10">
          <div>
            Already a Member?{" "}
            <span
              onClick={() => {
                navigate("/signin");
              }}
              className="text-buttonYellow hover:text-buttonYellowHover font-semibold cursor-pointer"
            >
              Sign in
            </span>
          </div>
        </div>
      </div>
      {/* second block */}
      <div className="my-20  mr-28 w-full ">
        <img className="w-3/4" src={hands} alt="" />
      </div>
    </div>
  );
};

export default CtaLanding;
