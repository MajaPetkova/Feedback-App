import {useState} from "react";
import data from "./data";


function App() {
  const [people, setPeople] = useState(data);
  console.log(people)
  return (
    <main >
    <section className="container">
      <h3> 0 birthdays today</h3>
    </section>
    </main>
  );
}

export default App;
