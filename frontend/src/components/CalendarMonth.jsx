import React, { useEffect, useState } from "react";

const CalendarMonth = ({ month }) => {
  const daysWritten = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const monthsWritten = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay(); // getDay() returns the day of the week (0-6)

    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate(); // getDate() returns the last day of the month (1-31)

    const tempDays = [];

    // Fill in empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      tempDays.push(null);
    }

    // Fill in the actual days of the month
    for (let i = 1; i <= lastDayOfMonth; i++) {
      tempDays.push(
        new Date(currentDate.getFullYear(), currentDate.getMonth(), i)
      );
    }

    setDays(tempDays);
  }, [currentDate]);

  return (
    <>
      <div className="flex gap-2 font-bold pl-6 text-sm">
        <div>{monthsWritten[currentDate.getMonth()]}</div>
        <div>{currentDate.getFullYear()}</div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-7 gap-1">
          {daysWritten.map((day, index) => (
            <div key={index} className="text-xs pl-2 cursor-pointer">
              {day}
            </div>
          ))}
          {days.map((day, index) => (
            <div
              key={index}
              className={`text-center text-xs rounded-full p-1 cursor-pointer ${
                day && day.getDate() === currentDate.getDate()
                  ? "bg-blue-500 text-white hover:bg-blue-400"
                  : ""
              } ${
                day && day.getDate() < currentDate.getDate()
                  ? "text-calendarPassedDates hover:text-gray-200"
                  : ""
              }${
                day && day.getDate() > currentDate.getDate()
                  ? "text-black hover:text-gray-500"
                  : ""
              }`}
            >
              {day ? day.getDate() : ""}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CalendarMonth;
