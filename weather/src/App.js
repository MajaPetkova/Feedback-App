import { useState } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("London");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=berlin&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;
  return (
    <div className="App">
      <div className="container">
        <div className="location"><p>Berlin</p></div>
        <div className="temp"><h1>20 grad</h1></div>
        <div className="description"><p>Clouds</p></div>
        <div className="bottom">
          <div><p>Feels like : 24Grad</p></div>
          <div className="humidity">20%</div>
          <div className="wind">12 MPh</div>
        </div>
      </div>
    </div>
  );
}

export default App;
