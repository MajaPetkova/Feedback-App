import { useRef, useState } from "react";
import "./CSS/Todo.css";
import TodoItems from "./TodoItems";

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodos([
      ...todos,
      {
        no: count++,
        text: inputRef.current.value,
        display: "",
      },
    ]);
    inputRef.current.value = "";
  };

  useState(() => {}, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input
          type="text"
          placeholder="Add your task"
          className="todo-input"
          ref={inputRef}
        />
        <div
          className="todo-add-btn"
          onClick={() => {
            add();
          }}
        >
          ADD
        </div>
      </div>
      <div className="todo-list">
        {todos.map((x, index) => {
          return (
            <TodoItems
              key={index}
              no={x.no}
              display={x.display}
              text={x.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
