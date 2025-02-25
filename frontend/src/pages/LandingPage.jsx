import { useNavigate } from "react-router-dom";
import { FaqLanding } from "../components/FaqLanding";
import { FrontLanding } from "../components/FrontLanding";
import FeatureLanding from "../components/FeatureLanding";
import CtaLanding from "../components/CtaLanding";
import logo_black from "../assets/logo_black.png";
import Logo from "../components/Logo";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-screen overflow-x-hidden">
        <div>
          <FrontLanding />
        </div>
        <div id="featureSection">
          <FeatureLanding />
        </div>
        <div id="faqLanding">
          <FaqLanding />
        </div>
        <div>
          <CtaLanding />
        </div>
        <div className="bg-amber-50 flex flex-col py-5 items-center text-center mt-auto">
          <div className="flex items-center gap-2 mt-10">
            <Logo size={"4"} mode={logo_black} />
            <div className="font-semibold text-sm">ProductivityPro Inc.</div>
          </div>
          <div className="text-grey mt-3 text-xs">
            © 2024 ProductivityPro Inc. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};
