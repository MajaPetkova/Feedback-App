import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("London");
  const [data, setData] = useState({})
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (e) =>{
    if(e.key === "Enter"){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data.name)
      })
      setLocation("")
    }
  }

  return (
    <div className="app">
      <div className="search">
      <input type="text" placeholder="Enter location"  className="search" value={location} onChange={(e)=>setLocation( e.target.value)} onKeyPress={searchLocation}/>
      </div>
      <div className="container">
        <div className="top">
        <div className="location"><h3>{data.name}</h3></div>
        <div className="temp">{data.main ? <h1>{((data.main.temp-32)*5/9).toFixed(1)} &#8451;</h1> : ""}</div>
        <div className="description"><h3>{data.weather? data.weather[0].description :null}</h3></div>
        </div>
       {data.name !== undefined && <div className="bottom">
          <div className="feels"><p className="bold"> {data.main ?((data.main.feels_like- 32)*5/9).toFixed(1) : null} &#8451; </p>
          <p>Feels like</p></div>
          <div className="humidity"><p className="bold">{data.main? data.main.humidity : null} % </p>
          <p>humidity</p></div>
          <div className="wind"><p className="bold">{data.wind ? data.wind.speed : null} MPH</p>
          <p>wind</p>
          </div>
        </div>}
      
      </div>
    </div>
  );
}

export default App;
