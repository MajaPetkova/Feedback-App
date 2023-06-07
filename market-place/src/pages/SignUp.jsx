import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {db} from "../firebase.config";
import {setDoc, doc, serverTimestamp} from "firebase/firestore"
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const submitHandler=async(e)=>{
   e.preventDefault();
    try{
    const auth= getAuth();
    const userCredential=  await createUserWithEmailAndPassword(auth, email, password);
    const user= userCredential.user;

    updateProfile(auth.currentUser, {
        displayName:name
    })
    const formDataCopy = {...formData};
    delete formDataCopy.password;
    formDataCopy.timeStamp= serverTimestamp();

    await setDoc(doc(db, "users", user.uid), formDataCopy)

    navigate("/")
    }catch(err){
        console.log(err)
    }
  }

  return (
    <>
      <div className="page-container">
        <header>
          <p className="header">Welcome back!</p>
        </header>
        <main>
          <form onSubmit={submitHandler}>
          <div className="name-container">
              <input
                type="name"
                className="nameInput"
                placeholder="Name"
                id="name"
                value={name}
                onChange={onChange}
              />
            </div>
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
            <div className="signUpBar">
              <p className="sighUpText">Sign Up</p>
              <button className="btn signUp">
                <ArrowRightIcon width="34px" fill="#ffffff" height="34px" />
              </button>
            </div>
          </form>
        </main>
        <div className="register-link">
          <Link to="/sign-up">Sign In Instead</Link>
        </div>
      </div>
    </>
  );
};
