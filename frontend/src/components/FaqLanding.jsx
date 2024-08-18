import React from "react";
import Faq from "./Faq";

export const FaqLanding = () => {
  return (
    <div className="flex flex-col h-screen items-center bg-gradient-to-b from-white to-amber-50">
      <div className="flex flex-col">
        <div className="mt-10">
          <div className="text-2xl font-bold">Boost Your Productivity</div>
        </div>
        <div className="text-grey my-4 font-medium flex justify-center">
          <div>Track Habits Effectively</div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Faq
          question="What is a Pomodoro timer?"
          description="A Pomodoro timer is a time management tool that breaks work into
            intervals, typically 25 minutes, separated by short breaks. It's
            designed to improve focus and productivity."
        />
        <Faq
          question="Can I set a custom timer?"
          description="Yes, you can set a custom timer for your activities. Simply select your desired duration, for example, 60 minutes, and the website will handle the rest"
        />
        <Faq
          question="How is my activity logged?"
          description="Your activity is automatically logged and updated on a heatmap of the calendar year. This provides a visual representation of your productivity over time."
        />
        <Faq
          question="What is the heatmap feature?"
          description="The heatmap feature visually represents the time you spent on activities throughout the year. The more time you spend, the darker the shade on the heatmap."
        />
        <Faq
          question="Can I see my daily progress?"
          description="Yes, you can hover over the heatmap to see details about the number of hours you studied or worked on a particular day. This helps track your daily progress effectively."
        />
      </div>
    </div>
  );
};
