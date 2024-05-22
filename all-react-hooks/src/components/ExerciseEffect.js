import React, { useState, useEffect } from "react";

export const ExerciseEffect = () => {
    const [count, setCount]= useState(0);
    useEffect(()=>{
     setTimeout(()=>{
        setCount(count =>count + 1)
     }, 3000)   
    }, [])

  return <div>
    <h1>I've rendered {count} times!</h1>


  </div>;
};
