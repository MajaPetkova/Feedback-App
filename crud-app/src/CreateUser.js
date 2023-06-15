import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const CreateUser= () =>{
    const [inputData, setInputData] = useState({
        name:"",
        email:""
    })

    const navigate= useNavigate();
    const submitHandler =(e)=>{
    e.preventDefault();
     axios.post("http://localhost:3030/users", inputData)
     .then(res => {
        console.log(res)
        alert("Data added successfully")
        navigate("/")
     }).catch(error =>console.log( error))
    }


    return(
        <div className="form-container">
         <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" className="form-control" onChange={(e)=>setInputData({...inputData, name: e.target.value} )}/>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" className="form-control" onChange={(e)=>setInputData({...inputData, email: e.target.value} )} />
            </div>
            <button className="btn">Submit</button>
         </form>
        </div>
    )
}