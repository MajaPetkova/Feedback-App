import { useLocation, navigate, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";

export const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
    } catch (err) {
        
    }
  };
  return (
    <div className="social-login">
      <p>
        Sign {location.pathname === "/sign-up" ? "up" : "in"} with
        <button className="socialIconDiv" onClick={onGoogleClick}>
          <img src={googleIcon} alt="google" />
        </button>
      </p>
    </div>
  );
};
