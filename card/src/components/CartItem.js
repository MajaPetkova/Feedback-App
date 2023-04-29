import {useContext} from "react"
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { AppContext } from "../context/context";

export const CartItem = ({ ...x }) => {

  return (
    <article className="cart-item">
      <div className="details">
        <img src={x.img} alt={x.title} />
        <div>
          <h4>{x.title}</h4>
          <h4 className="item-price">${x.price}</h4>
          <button className="remove-btn" onClick={()=>console.log("remove item")}>Remove</button>
        </div>
      </div>
      <div className="amount-btn">
        <button className="btn-arrow" onClick={()=>console.log("increase")}>
          <FaChevronUp />
        </button>
        <p className="amount">{x.amount}</p>
        <button className="btn-arrow" onClick={()=>console.log("decrease")}>
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};
