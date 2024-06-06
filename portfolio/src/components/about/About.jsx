import React from "react";
import "./about.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/ProfilePic.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" className="about-profile-img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              My passion about Frontend development is not only reflected in my
              learning experience but also in the enthusiasm and dedication I
              bring to each project.{" "}
            </p>
            <p>
              I am excellent team worker, able to take instructions from all
              levels and build up good working relationships with the
              colleagues.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            
            </div>
            <div className="achievements">
              <div className="about-achievements">
                <h1>50+</h1>
                <p>PROJECTS COMPLETED</p>
                {/* <hr style={{ width: "70%" }} /> */}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
