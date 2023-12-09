import { FormInput } from "./components/FormInput";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "text",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: " Confirm password",
      label: "Confirm password",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) =>{
    setValues({...values,  [e.target.name]: e.target.value})
  }
  console.log(values)
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {inputs.map((x)=> (<FormInput key ={x.id} {...x} value={values[x.name]} onChange={onChange}/>))}
       
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
