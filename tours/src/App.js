import "./App.css";
import { useState, useEffect } from "react";
import { Loading } from "./Loading";
import { Tours } from "./Tours";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setTours(tours);
      setIsLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchTours();
  }, []);

  if(isLoading){
    return (<Loading/>)
  }
  return (
    <main className="App">
      <h1>Tours Starter</h1>
      <Tours tours={tours}/>
    </main>
  );
}

export default App;
