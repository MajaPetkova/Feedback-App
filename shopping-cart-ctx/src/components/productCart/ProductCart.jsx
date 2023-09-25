import "./productCart.css";
import useShop from "../../ShopContext";
import { useEffect, useState } from "react";

function ProductCart({ imageUrl, name, price }) {
  const { products, addToCart, removeFromCart } = useShop();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productInCart = products.find((product) => product.name === name);

    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);
  
  const handleClick = () => {
    const product = { name, imageUrl, price };

    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="cart">
      <img src={imageUrl} alt="img" />
      <div className="btnContainer" onClick={handleClick}>
        <button className={isInCart ? "btn1" : "btn"} isInCart={isInCart}>
          {isInCart ? "-" : "+"}
        </button>
      </div>
      <div className="cartContainer">
        <h3>{name}</h3>
        <h5>{price}.00$</h5>
      </div>
    </div>
  );
}

export default ProductCart;
