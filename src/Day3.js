import React from "react";
import "./schedule.css";

const events = [
  { title: "Startup Pitch", desc: "Innovators present ideas", venue: "Auditorium", time: "10:00 AM" },
  { title: "Web Security", desc: "Building secure apps", venue: "Hall B", time: "11:30 AM" },
  { title: "Data & AI", desc: "Predictive analytics workshop", venue: "Lab 3", time: "1:00 PM" },
  { title: "Closing Ceremony", desc: "Awards & celebration", venue: "Main Stage", time: "3:00 PM" },
  { title: "DJ Night", desc: "Music & networking", venue: "Open Ground", time: "6:00 PM" }
];

const Day3 = () => (
  <div className="schedulecontent">
    <h2 className="day-heading">Day 3</h2>
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

export default Day3;
