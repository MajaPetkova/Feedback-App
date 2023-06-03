import { TodoForm } from "./components/TodoForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false }
    ]);
     console.log(todos)
  };
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };
  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const editTask =(id) =>{
   setTodos(todos.map((x)=> x.id ===id ? {...x, isEditing: !x.isEditing} : x))
  }
  return (
    <div className="container">
      <h1>Get things done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((x) => (
        <Todo
          x={x}
          key={x.id}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default App;
