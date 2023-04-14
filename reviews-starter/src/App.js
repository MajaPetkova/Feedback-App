import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  console.log(name);
  return (
    <main>
      <article className="card">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"/>
          <span><FaQuoteRight/></span>
        </div>
        <h4>{name}</h4>
        <p>{job}</p>
        <p>{text}</p>
        <div className="buttons">
          <FaChevronLeft/>
          <FaChevronRight/>
        </div>
      </article>
    </main>
  );
}

export default App;
