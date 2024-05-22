import React, { useState, useMemo } from "react";

export const ExerciseMemo = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("Calculation done");
    return Math.pow(num, 3);
  }
  const result = useMemo(()=>{return cubeNum(number)}, [number]);

  return (
    <div>
      <h4>useMemo</h4>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
      <h3>Cube of the number: {result}</h3>
      <button onClick={()=>setCounter(counter+1)}>Counter++</button>
      <h2>Counter: {counter}</h2>
    </div>
  );
};
