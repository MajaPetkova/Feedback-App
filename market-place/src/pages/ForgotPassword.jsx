import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit =async(e) => {
    e.preventDefault();
      try {
     const auth= getAuth();
     await sendPasswordResetEmail(auth, email)
      toast.success("Email was send")
    } catch (err) {
      toast.error("Could not send reset email");
    }
  };

  return (
    <div className="page-container">
      <header>
        <p className="page-header">Forgot password</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
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
          <div className="register-link">
            <Link to="/sign-in">Sign-In</Link>
          </div>
          <div className="signInBar">
            <p className="sighInText">Set Reset Link</p>
            <button className="btn signIn">
              <ArrowRightIcon width="34px" fill="#ffffff" height="34px" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
