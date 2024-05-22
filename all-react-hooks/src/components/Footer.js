import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function Footer() {
    const {phone, name} = useContext(AppContext)
  return (
    <div>
      <h4>Footer</h4>
      <p>Phone: {phone}</p>
      <p>Name: {name}</p>
    </div>
  );
}

export default Footer;
