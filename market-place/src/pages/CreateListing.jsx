import { useState, useEffect, useRef } from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";
 
export const CreateListing = () => {
  const [geoLocation, setGeoLocation] = useState(true);
  const [loading, setLoading]= useState(false);
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  });

  const auth= getAuth();
  const navigate= useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
        if(user){
           setFormData({...formData, userRef: user.uid}) 
        }else{
            navigate("/sign-in")
        }
    })
  },[])
  if(loading){
    return <Spinner/>
  }
  return <div>Create</div>;
};
