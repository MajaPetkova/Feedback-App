import { useContext } from "react";
import { CartContext } from "../context";

export const CartItem = ({ x }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <li className="single-item">
      <img src={x.image} alt="item_img" className="item_img" />
      <div className="item_info">
        {x.name} - {x.price}$
      </div>
      <button className="remove_btn" onClick={() => removeItem(x._id)}>
        Remove
      </button>
    </li>
  );
};
