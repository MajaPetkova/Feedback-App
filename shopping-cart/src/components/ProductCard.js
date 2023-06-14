import { useContext } from "react";
import { Rating } from "./Rating";
import { CartContext } from "../context";


export const ProductCard = ({ x }) => {
  const {addToCart} = useContext(CartContext);

  const { name, image, price, rating, numReviews } = x;
 
  return (
    <div className="productCard_wrapper">
      <img src={image} alt={image} className="productCard_img" />
      <h4>{name}</h4>
      <div className="productCard_price">
        <h5>${price}</h5>
        <div className="productCard_rating">
          <Rating value={rating} numReviews={numReviews} />
        </div>
        <button className="productCard_btn" onClick={()=>addToCart(x)}>Add to basket</button>
      </div>
    </div>
  );
};
