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
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row items-center gap-10 px-5 md:px-32 py-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">Achieve Your Goals</h2>
          <p className="my-5 text-lg text-grey">
            Tailor your daily routines and see your progress visually.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Feature feature="Habit Tracker" icon={f1} />
            <Feature feature="Log Time" icon={f2} />
            <Feature feature="Consistency" icon={f3} />
            <Feature feature="Yearly Heatmap" icon={f4} />
            <Feature feature="Pomodoro Timer" icon={f1} />
            <Feature feature="Create Activities" icon={f2} />
          </div>
          <button
            onClick={() => navigate("/signup")}
            className="hidden lg:block mt-6 px-4 py-2 border-2 border-greyBorder hover:bg-gray-100 rounded-xl"
          >
            Get Started
          </button>
        </div>
        <button
          onClick={() => navigate("/signup")}
          className="lg:hidden w-full px-4 py-2 border-2 -mt-4 border-greyBorder hover:bg-gray-100 rounded-xl"
        >
          Get Started
        </button>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center -mt-2 lg:mt-10 ">
          <img
            className="w-10/12 md:w-9/12 rounded-sm"
            src={calendar}
            alt="Calendar"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureLanding;
