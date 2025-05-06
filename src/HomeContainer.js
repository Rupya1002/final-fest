import React from "react";
import "./home.css";

const HomeContainer = () => {
  return (
    <div className="home-hero">
      <div className="overlay"></div>
      <div className="home-content">
        {/* <div className="home-image">
          <img src="./aiml.gif" alt="Fest celebration" />
        </div> */}
        <div className="home-text">
          <h1>🎉 Welcome to the TechFest 2025 🎉</h1>
          <p>✨ Dive into a world of innovation, fun, and inspiration.</p>
          <p>🚀 Discover cutting-edge technology and groundbreaking ideas.</p>
          <p>🤝 Connect with leaders, creators, and fellow visionaries.</p>
          <p>🧠 Hands-on workshops, tech panels, coding jams, and more!</p>
          <p>🎊 Unleash your creativity with exhibitions, games, and entertainment.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
