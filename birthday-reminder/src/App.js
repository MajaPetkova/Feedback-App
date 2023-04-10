import {useState} from "react";
import { List } from "./components/List";
import data from "./data";


function App() {
  const [people, setPeople] = useState(data);
  const clearHandler=()=>{
    setPeople([])
  }
  return (
    <main >
    <section className="container">
      <h3> {people.length} birthdays today</h3>
      <List people= {people} clearHandler={clearHandler}/>
    </section>
    </main>
  );
}

export default App;
