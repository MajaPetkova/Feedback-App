import {useState} from "react";
import { List } from "./components/List";
import data from "./data";


function App() {
  const [people, setPeople] = useState(data);

  return (
    <main >
    <section className="container">
      <h3> {people.length} birthdays today</h3>
      <List people= {people}/>
    </section>
    </main>
  );
}

export default App;
