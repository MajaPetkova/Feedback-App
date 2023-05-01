import { useState } from "react";

export const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue((oldState) =>{
        const newState = oldState + 1
        return newState;
    })
    // setTimeout(() => {
    //   setValue((oldState) => {
    //     return oldState + 1;
    //   });
    // }, 3000);
  };
  return (
    <div>
      <h2>UseState "Gotcha"</h2>
      <h1>{value}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};
