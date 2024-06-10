import "./hero.css";
import profile from "../../assets/ProfilePic.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profile} alt="" className="hero-profile" />
      <h1>
        <span>I am Maya Petkova, </span>JavaScript developer based in Berlin
      </h1>
      <p>
        Motivated, enthusiastic and creative person looking to pursue a
        successful career in software development, where I can help in the
        delivery of modern software solutions.
      </p>
      <div className="hero-actions">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me{" "}
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume </div>
      </div>
    </div>
  );
};

export default Hero;
