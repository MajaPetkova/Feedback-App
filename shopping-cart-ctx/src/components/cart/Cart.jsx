import "./cart.css";
import useShop from "../../ShopContext";
import ProductCart from "../productCart/ProductCart";

function Cart() {
  const {products, total} = useShop();
  return (<>
    <h1 className="titleCart">Your cart total is ${total}.00$</h1>
  <div className="cartShop">
   {products.map((x, index)=>(
     <ProductCart {...x} key={index}/>
     ))}
  </div>
     </>
  )
}

export default Cart