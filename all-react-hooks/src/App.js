import "./App.css";
import { useState } from "react";
import { ExerciseEffect } from "./components/ExerciseEffect";
import { ExerciseRef } from "./components/ExerciseRef";
import { ExerciseMemo } from "./components/ExerciseMemo";
import { ExerciseCallback } from "./components/ExerciseCallback";

function App() {
  const [count, setCount] = useState(0);
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: 2023,
    color: "red",
  });

  const changeColor = () => {
    setCar((car) => {
      return { ...car, color: "blue" };
    });
  };

  const increaseCount = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h3>My {car.brand}</h3>
      <h3>
        It is a {car.color} {car.model} from {car.year}
      </h3>
      <button onClick={changeColor}>Blue</button>
      <h3>Count: {count}</h3>
      <button onClick={increaseCount}>Increase by 4</button>
      <ExerciseEffect />
      <ExerciseRef />
      <ExerciseMemo />
      <ExerciseCallback />
    </>
  );
}

export default App;
