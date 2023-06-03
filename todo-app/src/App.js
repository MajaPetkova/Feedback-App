import { TodoForm} from "./components/TodoForm";
import {useState} from "react";
import {v4 as uuidv4} from "uuid"
import { Todo } from "./components/Todo";

function App() {
  const[todos, setTodos] = useState([]);

  const addTodo=(todo)=>{
     setTodos([...todos, {id:uuidv4(), task:todo, complited:false, isEditing:false}])
    //  console.log(todos)
  }
  return <div className="container">
     <TodoForm addTodo={addTodo}/>
     {todos.map((x, index)=>(<Todo/>) )}
  
  </div>;
}

export default App;
