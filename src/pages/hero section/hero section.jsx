import React from "react";
import "./rawan1.css";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title" style={{fontFamily: "Nunito"}}>Quality Learning</h1>
        <p className="hero-subtitle" style={{fontFamily: "Nunito"}}>For Every Child</p>
        <button className="hero-button" style={{fontFamily: "Nunito"}}>Creat an account </button>
        <div className="hero-image"></div>
      </div>
    </div>
  );
}

export default Hero;
