import { useState } from "react";

export const EditTodoForm = ({ editTodo, x }) => {
  const [input, setInput] = useState(x.task);

  const handleChange=(e)=>{
    setInput(e.target.value)
}
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(input, x.id);
    setInput("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Update Task"
          name="text"
          className="form-input"
          value={input}
          onChange={handleChange}
        />
        <button className="btn" add>
          Update Todo
        </button>
      </form>
    </div>
  );
};