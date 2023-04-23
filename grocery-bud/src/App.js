import { useState } from "react";
import { Form } from "./components/Form";
import { nanoid } from "nanoid";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem])
    console.log(newItem)
  };


  return (
    <section className="container">
      <Form addItem={addItem}/>
    </section>
  );
}

export default App;
