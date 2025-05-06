import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./schedule.css";

const ScheduleContainer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="schedulecontainer">
        <div className="circle" onClick={() => navigate("day1")}>
          <h2>Day 1</h2>
          <p>Click to view events</p>
        </div>
        <div className="circle" onClick={() => navigate("day2")}>
          <h2>Day 2</h2>
          <p>Click to view events</p>
        </div>
        <div className="circle" onClick={() => navigate("day3")}>
          <h2>Day 3</h2>
          <p>Click to view events</p>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default ScheduleContainer;
