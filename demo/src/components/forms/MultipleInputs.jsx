import { useState } from "react"

export const MultipleInputs= () =>{
    const [user, setUser] = useState({
        name: "",
        email:"",
        password:""
    })
   const handleChange =(e)=>{
      setUser({...user,[e.target.name]: e.target.value})
     
   }


   const submitHandler =(e) =>{
   e.preventDefault();
   console.log(user)
   }


    return(
        <form className="form" onSubmit={submitHandler}>
        <h4>Controlled Inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    )
}