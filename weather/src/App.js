import { useState } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("London");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=berlin&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;
  return (
    <div className="app">
      <div className="search">
      <input type="text" name="" id="search"  placeholder="Enter location"  className="search"/>
      </div>
      <div className="container">
        <div className="top">
        <div className="location"><h3>Berlin</h3></div>
        <div className="temp"><h1>20 &#8451;</h1></div>
        <div className="description"><h3>Clouds</h3></div>
        </div>

        <div className="bottom">
          <div className="feels"><p className="bold"> 22 &#8451; </p>
          <p>Feels like</p></div>
          <div className="humidity"><p className="bold">20 &#8451; </p>
          <p>humidity</p></div>
          <div className="wind"><p className="bold">12 MPh</p>
          <p>wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
