import { useState, useEffect } from "react";
import validateInfo from "./validatesInfo";

const UseForm = (callback, validateInfo) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setIsSubmitting] = useState(false);

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
    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting)   {
     callback()
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};
export default UseForm;
