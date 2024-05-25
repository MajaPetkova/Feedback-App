import "./CSS/TodoItems.css";
import tick from "./Assets/tick.png";
import notTick from "./Assets/not_tick.png";
import cross from "./Assets/cross.png";

const TodoItems = ({ no, text, display, setTodos }) => {
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display ="";
        }
        break;
      }
    }
    setTodos(data)
  };
const deleteItem =(no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data= data.filter((x)=>x.no !== no)
    setTodos(data)
}
  return (
    <div className="todo-item">
      <div
        className={`todoItems-container ${display}`}
          onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <img src={notTick} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}
        <div className="todoItems-text">{text}</div>
      </div>
      <img src={cross} alt="" className="todo-icon" onClick={()=>deleteItem(no)} />
    </div>
  );
};
export default TodoItems;
