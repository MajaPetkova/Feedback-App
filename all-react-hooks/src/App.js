import "./App.css";
import { useState } from "react";

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
    setCount((prev) =>prev +1)
    setCount((prev) =>prev +1)
    setCount((prev) =>prev +1)
    setCount((prev) =>prev +1)
  };

  return (
    <>
      <h2>My {car.brand}</h2>
      <h3>
        It is a {car.color} {car.model} from {car.year}
      </h3>
      <button onClick={changeColor}>Blue</button>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase by 4</button>
    </>
  );
}

export default App;
