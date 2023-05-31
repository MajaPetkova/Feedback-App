import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  let imgSrc = "";

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <form>
        <div className="weight">
          <label htmlFor="weight">Weight (kg) </label>
          <input type="" name="weight" id="weight" value={weight} />
        </div>
        <div className="height">
          <label htmlFor="height">Height (cm) </label>
          <input type="" name="height" id="height" value={height} />
        </div>
        <div className="buttons">
          <button className="btn">Submit</button>
          <button className="btn">Clear</button>
        </div>
      </form>
      <div className="center">
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
      <div className="img-container">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
}

export default App;
