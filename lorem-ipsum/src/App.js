import { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);



  return (
    <section className="container">
      <h4>Tired of boring Lorem Ipsum ?</h4>
      <form className="lorem-form">
        <label htmlFor="amount">Paragraphs:</label>
        <input type="number" name="amount" id="amount" min="1" step="1" max="8" value={count} onChange={(e)=>setCount(e.target.value)} />
        <button type="submit" className="btn">Generate</button>
      </form>
    </section>
  );
}

export default App;
