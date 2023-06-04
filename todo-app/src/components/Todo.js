import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

export const Todo = ({ x, toggleComplete, deleteTask, editTask }) => {
  
  return (
    <div className="todo">
      <p onClick={()=>toggleComplete(x.id)} className={`${x.task.completed ? "completed": ""}`}>{x.task}</p>
      <div className="buts">
        <FaRegEdit onClick={()=>editTask(x.id)} className="icon" />
        <FaTrashAlt onClick={()=>deleteTask(x.id)} className="icon" />
      </div>
    </div>
  );
};
