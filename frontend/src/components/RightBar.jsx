import React, { useEffect, useState } from "react";
import CalendarCard from "./CalendarCard";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const RightBar = () => {
  const dateObj = new Date();
  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/v1/user/tasks`, {
        withCredentials: true,
      });
      console.log(response.data);
      setAllTasks(response.data.tasks);
    };
  });
  return (
    <div className="fixed bg-white border-l shadow-sm right-0 w-80 top-16 h-screen  ">
      <div className="mt-10 flex justify-center">
        <CalendarCard />
      </div>
      <h1>Hello</h1>
    </div>
  );
};
