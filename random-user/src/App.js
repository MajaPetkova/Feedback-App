import { useEffect, useState } from "react";
import {FaUserAlt,FaRegCalendarTimes,FaMap, FaPhone, FaLock, FaEnvelopeOpen}  from "react-icons/fa";

const url = "https://randomuser.me/api/";
const defaultImg= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHh9Y7tcmwEr_od64uK2G5DokOr_yxia1xVw&usqp=CAU";


function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  const handleValue =(e)=> {
    if(e.target.classList.contains("icon")){
     const newValue= e.target.dataset.label 
     setTitle(newValue)
     setValue(user[newValue])
    }
  }

  const userLoading = async() =>{
    const res= await fetch(url)
    const data=await res.json();
    const user= data.results[0];

    const {email, phone } = user;
    const { large: img} = user.picture;
    const {login:{username}} = user;
    const {first, last} = user.name;
    const{dob:{age}} = user;
    const {name, number} = user.location.street;
  

   const person = {img, email, phone, username, name:`${first} ${last}`, age, street: `${name} ${number}`}
   setUser(person)
   setLoading(false)
   setTitle("name")
   setValue(name)
  }
  useEffect(()=>{
     userLoading()
  }, [])
  return (
    <main>
      <div className="bgg"></div>
      <div className="container">
        <img src={user && user.img  || defaultImg} alt="random user" />
        <p>My {title} is</p>
        <h3>{value ? value : "Random Person"}</h3>
        <div className="icons">
         <button className="icon" data-label= "name" onMouseOver={handleValue}><FaUserAlt/></button> 
         <button className="icon" data-label= "email" onMouseOver={handleValue}> <FaEnvelopeOpen/> </button>
         <button className="icon" data-label= "age" onMouseOver={handleValue}> <FaRegCalendarTimes/></button>
         <button className="icon" data-label= "street" onMouseOver={handleValue}> <FaMap/></button>
         <button className="icon" data-label= "phone" onMouseOver={handleValue}>  <FaPhone/></button>
         <button className="icon" data-label= "username" onMouseOver={handleValue} >  <FaLock/></button>
        </div>
        <button className="btn"  onClick={userLoading}>{loading ? "loading..." : "Random User"}</button>
      </div>
    </main>
  );
}

export default App;
