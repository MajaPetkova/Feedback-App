import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";


function ExerciseCustom() {
 const[name, setName] = useLocalStorage("username", "" )
 const[id, setId] = useLocalStorage("userId", "" )


  return (
    <div>
      <h4>Custom Hook</h4>
      <input type="text" placeholder="enter your name" value={name} onChange={(e)=>setName(e.target.value)} />
      <p>Hello, {name}</p>
      <input type="text" placeholder="enter your id" value={id} onChange={(e)=>setId(e.target.value)} />
      <p>Your id is: {id}</p>
    </div>
  );
}

export default ExerciseCustom;
