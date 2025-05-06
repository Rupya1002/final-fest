import React from "react";
import "./schedule.css";

const events = [
  { title: "AI Ethics", desc: "Responsible AI practices", venue: "Hall A", time: "10:00 AM" },
  { title: "Next-gen Web", desc: "PWA & JAMstack", venue: "Hall B", time: "11:30 AM" },
  { title: "Smart Contracts", desc: "Blockchain automation", venue: "Hall C", time: "1:00 PM" },
  { title: "Metaverse Worlds", desc: "Creating 3D spaces", venue: "Hall D", time: "2:30 PM" },
  { title: "Hackathon Kickoff", desc: "48-hour coding marathon", venue: "Main Arena", time: "4:00 PM" }
];

const Day2 = () => (
  <div className="schedulecontent">
    <h2 className="day-heading">Day 2</h2>
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

export default Day2;
