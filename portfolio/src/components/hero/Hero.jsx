import React from "react";
import "./hero.css";
import profile from "../../assets/ProfilePic.jpg"

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="" className="hero-profile" />
      <h1><span>I am Maya Petkova, </span>JavaScript developer based in Berlin</h1>
      <p>
        Motivated, enthusiastic and creative person looking to pursue a
        successful career in software development, where I can help in the
        delivery of modern software solutions.{" "}
      </p>
      <div className="hero-actions">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume </div>
      </div>
    </div>
  );
};

export default Hero;
