import { AppContext } from "../context/context";
import cartItems from "../data";
import { CartItem } from "./CartItem";
import { useContext } from "react";

export const CartContainer = () => {
    
    const {cart} = useContext(AppContext)
    const cartArray = Array.from (cart.entries())
    // console.log(cartArray)

    if(cartItems.length === 0){
        return (
            <section className="cart">
             <header>
                <h2>Your Bag</h2>
                <h4 className="empty-cart">is currently empty</h4>
             </header>
            </section>
        )
    }
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartArray.map((x) => {
            const[id, item]= x;
          return <CartItem key={id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$0.00</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={console.log("clear all")}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};
