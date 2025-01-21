import React from "react";
import TrackerCalendarMonth from "./TrackerCalendarMonth";

export const TrackerComponent = () => {
  return (
    <div>
      <div className="w-full  flex gap-1 flex-col">
        <div className="flex">
          <TrackerCalendarMonth month={0} />
          <TrackerCalendarMonth month={1} />
          <TrackerCalendarMonth month={2} />
          <TrackerCalendarMonth month={3} />
          <TrackerCalendarMonth month={4} />
          <TrackerCalendarMonth month={5} />
        </div>
        <div className="flex">
          <TrackerCalendarMonth month={6} />
          <TrackerCalendarMonth month={7} />
          <TrackerCalendarMonth month={8} />
          <TrackerCalendarMonth month={9} />
          <TrackerCalendarMonth month={10} />
          <TrackerCalendarMonth month={11} />
        </div>

        {/* <div>
          <TrackerCalendarMonth month={1} />
        </div>
        <div>
          <TrackerCalendarMonth month={2} />
        </div>
        <div>
          <TrackerCalendarMonth month={3} />
        </div>
        <div>
          <TrackerCalendarMonth month={4} />
        </div>
        <div>
          <TrackerCalendarMonth month={5} />
        </div>
        <div>
          <TrackerCalendarMonth month={6} />
        </div>
        <div>
          <TrackerCalendarMonth month={7} />
        </div>
        <div>
          <TrackerCalendarMonth month={8} />
        </div>
        <div>
          <TrackerCalendarMonth month={9} />
        </div>
        <div>
          <TrackerCalendarMonth month={10} />
        </div>
        <div>
          <TrackerCalendarMonth month={11} />
        </div> */}
      </div>
    </div>
  );
};
