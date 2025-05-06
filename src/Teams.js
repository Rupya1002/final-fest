import React, { useEffect, useState } from "react";
import "./teams.css";

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    fetch("/Teams.json")
      .then((response) => response.json())
      .then((data) => setTeamData(data));
  }, []);

  useEffect(() => {
    const timeouts = teamData.map((_, i) =>
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, i]);
      }, i * 300)
    );
    return () => timeouts.forEach(clearTimeout);
  }, [teamData]);

  return (
    <div className="team-container">
      <h1 className="team-title">Meet Our Team</h1>
      <div className="cards-wrapper">
        {teamData.map((member, index) => (
          <div
            key={member.Id}
            className={`team-card ${visibleCards.includes(index) ? "visible" : ""}`}
          >
            <div className="team-card-inner">
              <div className="team-card-front">
                <img
                  src={member.Image}
                  alt={member.Name}
                  className="team-image"
                />
                <h3 className="team-name">{member.Name}</h3>
              </div>
              <div className="team-card-back">
                {member.Role || "Awesome Team Member"}
              </div>
            </div>
            <div className="sparkles">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
