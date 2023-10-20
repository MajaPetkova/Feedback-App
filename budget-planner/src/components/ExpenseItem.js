import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);
  console.log(props.id)
  const deleteHandler = () => {
  
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id
    })
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}- {props.id}
      <div>
        <span className="mr-3">{props.cost}$</span>
        <TiDelete size="1.5em" onClick={deleteHandler}></TiDelete>
      </div>
    </li>
  );
}

export default ExpenseItem;
