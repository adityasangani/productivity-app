import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import calendar from "../assets/calendar.png";
import { useNavigate } from "react-router-dom";
import Feature from "../components/Feature";

const FeatureLanding = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex gap-11 ">
      {/* first block */}
      <div className="flex flex-col my-32 mx-32">
        <div>
          <div className="text-4xl font-bold">Achieve Your Goals</div>
        </div>
        <div className="my-5">
          <div className="text-lg text-grey">
            Tailor your daily routines and see your progress visually.
          </div>
        </div>
        <div className="flex gap-20 mt-8">
          <div className="flex flex-col gap-7">
            <Feature feature="Habit Tracker" icon={f1} />
            <Feature feature="Log Time" icon={f2} />
            <Feature feature="Consistency" icon={f3} />
          </div>
          <div className="flex flex-col gap-7">
            <Feature feature="Yearly Heatmap" icon={f4} />
            <Feature feature="Pomodoro Timer" icon={f1} />
            <Feature feature="Create Activities" icon={f2} />
          </div>
        </div>
        <div className="mt-8">
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="font-semibold cursor-pointer py-1 px-2 rounded-xl border-2 border-greyBorder hover:bg-gray-100"
          >
            Get Started
          </button>
        </div>
      </div>
      {/* second block */}
      <div className="my-20 ml-12">
        <img className="" src={calendar} alt="" />
      </div>
    </div>
  );
};

export default FeatureLanding;
