import "./App.css";
import { useState, useEffect } from "react";
import { Loading } from "../src/components/Loading";
import { Tours } from "../src/components/Tours";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setTours(tours);
      setIsLoading(false)
    } catch (err) {
      console.log(err);
    }
  };
const removeTour=(id)=>{
  const toursArr= tours.filter(x => x.id !== id);
  // console.log(toursArr)
  setTours(toursArr)
}
  useEffect(() => {
    setIsLoading(true);
    fetchTours();
  }, []);

  if(isLoading){
    return (<Loading/>)
  }
  if(tours.length == 0){
    return(<main>
      <div className="title">
        <h2>No tours left</h2>
        <button className="btn-btn" type="button" onClick={()=>fetchTours()}>Get Tours</button>
      </div>
    </main>)
  }
  return (
    <main className="App">
      <h1>Tours Starter</h1>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
