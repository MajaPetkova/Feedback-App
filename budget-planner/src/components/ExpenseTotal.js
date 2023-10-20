import { AppContext } from "../context/AppContext";
import {useContext} from "react";

function ExpenseTotal() {
  const {expenses} = useContext(AppContext);
  const spent = expenses.reduce((total, item)=>{
    return total = total + item.cost
  }, 0)
  return (
     
    <div className='alert alert-primary'>
        <span>Spent so far: {spent}$ </span>
    </div>
  )
}

export default ExpenseTotal