import { useState } from "react";
import { Form } from "./components/Form";
import { nanoid } from "nanoid";
import { ItemList } from "./components/ItemList";

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
const removeItem=(itemId)=>{}

  return (
    <section className="container">
      <Form addItem={addItem}/>
      <ItemList items={items} removeItem={removeItem}/>
    </section>
  );
}

export default App;
