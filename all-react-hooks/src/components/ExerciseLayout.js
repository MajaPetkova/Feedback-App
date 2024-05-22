import React, { useEffect, useLayoutEffect } from "react";

function ExerciseLayout() {
  useEffect(() => {
    console.log("Message from useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect");
  }, []);

  return (
    <div>
      <h4>UseLayoutEffect</h4>
      {Array(40).fill("").map((x, i)=>(
       <li key={i}>{Math.pow(Math.random(), 10)}</li>
      ))}
    </div>
  );
}

export default ExerciseLayout;
