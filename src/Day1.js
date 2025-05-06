import React from "react";
import "./schedule.css";

const events = [
  { title: "AI & Future", desc: "Intro to AI & Metaverse", venue: "Hall A", time: "10:00 AM" },
  { title: "Web Tech Today", desc: "Modern frameworks and ecosystems", venue: "Hall B", time: "11:30 AM" },
  { title: "Blockchain Basics", desc: "Secure decentralized systems", venue: "Hall C", time: "1:00 PM" },
  { title: "UI/UX Trends", desc: "Designing immersive interfaces", venue: "Hall D", time: "2:30 PM" },
  { title: "AR/VR Fusion", desc: "Blending virtual and real worlds", venue: "Hall E", time: "4:00 PM" }
];

const Day1 = () => (
  <div className="schedulecontent">
    <h2 className="day-heading">Day 1</h2>
    {events.map((event, index) => (
      <div className="day-content" key={index}>
        <div className="left-section">
          <p><strong>Title:</strong> {event.title}</p>
          <p><strong>Description:</strong> {event.desc}</p>
        </div>
        <div className="divider"></div>
        <div className="right-section">
          <p><strong>Venue:</strong> {event.venue}</p>
          <p><strong>Time:</strong> {event.time}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Day1;
