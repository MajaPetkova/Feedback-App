import React, { useEffect, useState, useRef} from "react";

export const ExerciseRef = () => {
  const [value, setValue] = useState(0);
  const count = useRef(0);
  const inputEl = useRef();


  useEffect(()=>{
    count.current = count.current + 1
  })
  const btnClicked=()=>{
    console.log(inputEl.current)
    inputEl.current.style.background = "purple"
   }
  return (
    <div>
      <button onClick={()=>{setValue(value=> value-1)}}>-1</button>
      <h1>{value}</h1>
      <button onClick={()=>{setValue(value=> value+1)}}>+1</button>
      <h3>Render Count: {count.current} </h3>
      <input type="text" ref={inputEl} />
      <button onClick={btnClicked}>Click here</button>
    </div>
  );
};
