import { useState } from "react";
const frameworks= ["react", "vue", "angular", "svelte"];


export const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e) => {
    setShipping(e.target.checked);
  };
  
  const handleFramework = (e) => {
setFramework(e.target.value)
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(shipping)
    console.log(framework)
  // const formData= new FormData(e.currentTarget)
  // const newUser = Object.fromEntries(formData)
  // console.log(newUser)
  };

  return (
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
      
      <div className="">
        <label htmlFor="shipping" className="form-label">
          Free shipping
        </label>
        <input
          type="checkbox"
          name="shipping"
          id="shipping"
          checked={shipping}
          onChange={handleShipping}
        />
      </div>
      <div className="form-row">
          <label htmlFor="framework" className="form-label">
         Framework
          </label>
        <select name="framework" id="framework" value={framework} onChange={handleFramework}>
          {frameworks.map(x=>
            <option key={x}>{x}</option>
          )}
        </select>
      </div>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};
