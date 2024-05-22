import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function ExerciseContext() {
  const {phone} = useContext(AppContext);
  return (<div>
    Phone: {phone}
  </div>);
}

export default ExerciseContext;
