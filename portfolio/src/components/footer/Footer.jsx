import "./footer.css";
import logo from "../../assets/logo.webp";
import theme_pattern from "../../assets/theme_pattern.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" className="logo-img" />
          <img src={theme_pattern} alt="" className="theme" />
          <p>
            I am a JavaScript developer from Berlin, looking to pursue a
            successful career in software development, where I can help in the
            delivery of modern software solutions.
          </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
