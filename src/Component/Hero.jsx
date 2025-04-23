import React from "react";
import "../Component/Css/Hero.css";
import profilePic from "../assets/ImportedPhoto_1745052985748.jpg";


function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-left">
          <p className="hello-text">Hello, I'm</p>
          <h1 className="hero-name tracking-in-contract-bck-top">Nivetha Mathivanan</h1>
          <h2 className="hero-role">Front-End <span> Developer</span></h2>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Say Hello 👋</a>
            <a href="#about" className="btn-secondary">About Me</a>
          </div>

          <p className="email-text">nivethamathivanan@gmail.com</p>
        </div>

        <div className="hero-right">
        <div className="red-theme-wrapper">
                        <img src={profilePic} alt="Profile" className="profile-pic" />
                    </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
