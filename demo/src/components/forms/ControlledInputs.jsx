import { useState } from "react";

export const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]) ;

 const submitHandler =(e)=>{
   e.preventDefault();
   if(name == "" || email == ""){
    return
   }
  const fakeId= Date.now();
  const newUser = {id:fakeId, name, email};
  const updatedUsers= [...users, newUser]
 setUsers(updatedUsers);
 setName("");
 setEmail("")
 }
  return (<>
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
          value={name}
          onChange={(e)=>setName(e.target.value)}
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
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
      </div>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
    <div>
        <ul>
        {users.map(x=> {return <li key={x.id}>{x.name} {x.email}</li>})}
        </ul>
    </div>
          </>
    
  );
};
