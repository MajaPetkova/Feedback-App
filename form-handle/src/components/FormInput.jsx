import React from "react";
import "./formInput.css";

export const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <div className="formInput">
      <label>{label} </label>
      <input {...inputProps} onChange={onChange} required />
      <span>{errorMessage}</span>
    </div>
  );
};
