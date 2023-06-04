import { useState, useEffect } from "react";

const UseForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // [e.target.name]:e.target.value
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return { handleChange, values, handleSubmit };
};
export default UseForm;
