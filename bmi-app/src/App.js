import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  let imgSrc = "";

  const submitHandler = (e) => {
    e.preventDefault();
    if (height == 0 || weight == 0) {
      alert("Please enter a valid height and weight");
    } else {
      let bmi = weight / Math.pow(height / 100, 2);
      setBmi(bmi.toFixed(1));
      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi > 18.5 && bmi <= 24.9) {
        setMessage("You are in the healthy range");
      } else  {
        setMessage("You are overweight");
      }
    }
  };
  if (bmi < 1) {
    imgSrc = null;
  } else if (bmi < 25) {
    imgSrc = require("./assets/underweight.png");
  } else if (bmi >= 25 && bmi < 30) {
    imgSrc = require("./assets/healthy.png");
  } else if (bmi > 30) {
    imgSrc = require("./assets/overweight.png");
  }

  const reload = () => {
    window.location.reload();
  };
  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <form onSubmit={submitHandler}>
        <div className="weight">
          <label htmlFor="weight">Weight (kg) </label>
          <input
            type=""
            name="weight"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="height">
          <label htmlFor="height">Height (cm) </label>
          <input
            type=""
            name="height"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn" type="submit" onClick={reload}>
            Clear
          </button>
        </div>
      </form>
      <div className="center">
        {bmi ? <h3>Your BMI is:</h3> : null}
        <p>{message}</p>
      </div>
      <div className="img-container">
        <img src={imgSrc} alt="img" />
      </div>
    </div>
  );
}

export default App;
