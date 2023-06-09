import { useEffect, useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate, Link } from "react-router-dom";
import {toast} from "react-toastify";

export const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [changeDetails, setChangeDetails] = useState(false);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const logoutHandler = () => {
    auth.signOut();
    navigate("/");
  };
  const changeHandler = () => {
    changeDetails && onSubmit();
    setChangeDetails(!changeDetails);
  };

  const onSubmit = async() => {
    try{
      if(auth.currentUser.displayName !== name){
        // Update displayName in fb 
       await updateProfile(auth.currentUser, {displayName:name})
      }
    //   Update in fireStore 
      const userRef= doc(db, "users", auth.currentUser.uid )
       await updateDoc(userRef, {
        name
       })
    }catch(err){
    // console.log(err)
    toast.error("Could not update profile details")
 }
  };
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <div className="profile">
      <header className="profile-header">
        <p className="page-header">My Profile</p>
        <button className="logout" type="button" onClick={logoutHandler}>
          Logout
        </button>
      </header>
      <main>
        <div className="profile-details">
          <p className="profile-title">Personal Details</p>
          <p className="personal-details" onClick={changeHandler}>
            {changeDetails ? "done" : "change"}
          </p>
        </div>
        <div className="profile-card">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              id="name"
              className={!changeDetails ? "profileName" : "profileNameActive" }
              disabled={!changeDetails}
              value={name}
              onChange={onChange}
            />
             <input
              type="text"
              id="email"
              className={!changeDetails ? "profileEmail" : "profileEmailActive" }
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
            />
          </form>
        </div>
      </main>
    </div>
  );
};
