import "./CSS/TodoItems.css";
import tick from "./Assets/tick.png";
import notTick from "./Assets/not_tick.png";
import cross from "./Assets/cross.png";

const TodoItems = ({no, text, display }) => {
  return (
    <div className="todo-item">
      <div className="todoItems-container">
        <img src={notTick} alt="" />
        <img src={tick} alt="" />
        <div className="todoItems-text">
           {text}
        </div>
      </div>
        <img src={cross} alt="" className="todo-icon" />
    </div>
  );
};
export default TodoItems;
