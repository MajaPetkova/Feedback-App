import { useState, useEffect } from "react";
import validateInfo from "./validatesInfo";

const UseForm = (validateInfo) => {
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
    setErrors(validateInfo(values))
  };

  return { handleChange, values, handleSubmit, errors };
};
export default UseForm;
