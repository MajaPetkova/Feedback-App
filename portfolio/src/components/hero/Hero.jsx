import "./hero.css";
import profile from "../../assets/ProfilePic.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {
  const pdfFilePath =  '/Resume.pdf';

  return (
    <div className="hero" id="home">
      <img src={profile} alt="" className="hero-profile" />
      <h1>
        <span>I am Maya Petkova, </span>JavaScript developer based in Berlin
      </h1>
      <p>
      From social and health care to functionality. Fresh from the learning process, like a passionate frontend developer, I bring new perspectives and strong willingness for learning to the world of web development and design. My ability to care, I brought from my last experience as Social assistant and now I am ready to care for the pleasant user experience, and I am ready to develop myself further.
      </p>
      <div className="hero-actions">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me{" "}
          </AnchorLink>
        </div>
        <a href={pdfFilePath} download="Resume.pdf">
        <div className="hero-resume" >
          My resume
        </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
