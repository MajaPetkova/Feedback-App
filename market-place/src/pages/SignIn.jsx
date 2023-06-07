import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/");
      }
    } catch (err) {
      toast.error("Bad user credentials");
      // console.log(err)
    }
  };

  return (
    <>
      <div className="page-container">
        <header>
          <p className="header">Welcome back!</p>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <div className="email-container">
              <input
                type="email"
                className="emailInput"
                placeholder="Email"
                id="email"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                className="passwordInput"
                placeholder="Password"
                id="password"
                value={password}
                onChange={onChange}
              />
              <img
                src={visibilityIcon}
                alt="show password"
                onClick={() => setShowPassword(!showPassword)}
                className="showPassword"
              />
            </div>
            <div className="forgot-link">
              <Link to="/forgot-password">Forgot Password</Link>
            </div>
            <div className="signInBar">
              <p className="sighInText">Sign In</p>
              <button className="btn signIn">
                <ArrowRightIcon width="34px" fill="#ffffff" height="34px" />
              </button>
            </div>
          </form>
        </main>
        <div className="register-link">
          <Link to="/sign-up">Sign Up Instead</Link>
        </div>
      </div>
    </>
  );
};
