import { FaAngleDown, FaAngleUp } from "react-icons/fa";

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
          <FaAngleUp />
        </button>
        <p className="amount">{x.amount}</p>
        <button className="btn-arrow" onClick={()=>console.log("decrease")}>
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
};
