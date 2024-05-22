import React, { useState, useCallback } from "react";
import Header from "./Header";


export const ExerciseCallback = () => {
  const [count, setCount] = useState(0);
  const newFn =useCallback(()=>{

  }, [])

  return (
    <div>
      <h4>UseCallback</h4>
      <Header newFn= {newFn}/>
      <h3>Count: {count}</h3>
      <button
        onClick={() => {setCount((prev) => prev + 1)}}>
        Click Here
      </button>
    </div>
  );
};
