import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

const TrackerCalendarMonth = ({ month }) => {
  const daysWritten = ["S", "M", "T", "W", "T", "F", "S"];
  const monthsWritten = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const currentYear = new Date().getFullYear();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);
  const [studyLogs, setStudyLogs] = useState({});

  useEffect(() => {
    const firstDay = new Date(currentYear, month, 1).getDay();
    const lastDayOfMonth = new Date(currentYear, month + 1, 0).getDate(); // getDate() returns the last day of the month (1-31)

    const tempDays = [];

    // Fill in empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      tempDays.push(null);
    }

    // Fill in the actual days of the month
    for (let i = 1; i <= lastDayOfMonth; i++) {
      tempDays.push(new Date(currentYear, month, i));
    }

    setDays(tempDays);
    const fetchStudyLog = async() => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/users/studylogs`, {withCredentials:true});
        if(response.data){
            const logs = response.data.reduce((accumulator, log) => {
              const dateStr = new Date(log.date)
              return accumulator + log.totalTime;
            }, 0)
        } else{
          console.log("Study log does not exist :(");
        }
      } catch (error) {
        console.error("Error fetching study logs: ", error);
      }      
    }
  }, [currentDate]);

  const getDayClass = (day) => {
    if (!day) return "";
    if (
      day.getDate() === currentDate.getDate() &&
      day.getMonth() === currentDate.getMonth()
    ) {
      return "bg-blue-500 text-white rounded-sm hover:bg-blue-400 ";
    }
    if (day < currentDate) {
      return "text-calendarPassedDates rounded-sm bg-slate-200 hover:text-gray-200 ";
    }
    return "text-black bg-slate-400 rounded-sm  hover:text-gray-500";
  };

  return (
    <>
      <div className="w-1/3">
        <div className="flex font-bold  justify-center">
          <div className="text-xs">{monthsWritten[month]}</div>
        </div>
        <div className=" bg-white">
          <div className="grid grid-rows-7 grid-flow-col p-2">
            {days.map((day, index) => (
              <div
                key={index}
                className={`text-center text-sm p-2 m-1 cursor-pointer ${getDayClass(
                  day
                )}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackerCalendarMonth;
