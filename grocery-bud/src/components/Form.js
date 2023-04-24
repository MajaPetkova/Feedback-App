import { useState } from "react";
import {toast} from "react-toastify";


export const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("Please enter a value")
      return;
    } else {
      addItem(newItemName);
      setNewItemName("");
    }
  };
  return (
    <div className="form-block">
      <h4>Grocery Bud</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button className="btn" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
};
