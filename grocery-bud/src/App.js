import { useState } from "react";
import { Form } from "./components/Form";
import { nanoid } from "nanoid";
import { ItemList } from "./components/ItemList";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
  // console.log(list)
};
const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");


function App() {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };
  const removeItem = (itemId) => {
    const newItemsArray = items.filter((x) => x.id !== itemId);
    setItems(newItemsArray);
    setLocalStorage(newItemsArray);
  };

  return (
    <section className="container">
      <Form addItem={addItem} />
      <ItemList items={items} removeItem={removeItem} />
    </section>
  );
}

export default App;
