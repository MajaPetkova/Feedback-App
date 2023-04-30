import { FaCartPlus } from "react-icons/fa";
import {useContext} from "react"
import { AppContext } from "../context/context";

export const Navbar = () => {
  const {totalAmount} = useContext(AppContext)
  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus />
          <div className="amount-container">
            <p className="total-amount">{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
