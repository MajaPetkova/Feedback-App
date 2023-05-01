import { useState } from "react";

export const ShortComponent = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Susan");
  const [user, setUser] = useState({ name: "John" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>Short examples</h2>
      {text || "Default Value"}
      {user && <SecondComponent name={user.name} />}
      <h4>Ternary Operator</h4>
      <button className="btn">{isEditing ? "Edit" : "Add"}</button>
      {user ? <h4>Hello there user {user.name}</h4> : <h4> please login</h4>}
    </div>
  );
};
export const SecondComponent = ({ name }) => {
  return <div>{name}</div>;
};
