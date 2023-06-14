import { useContext } from "react";
import { CartContext } from "../context";

export const Navbar = () => {
  const{cartItems, showHideCart} = useContext(CartContext)
  return <nav>
    <div className="nav_left">Store</div>
    <div className="nav_middle">
        <div className="input_wrapper">
            <input type="text" />
            <i className="fas fa-search"></i>
        </div>
    
    </div>
    <div className="nav_right">
        <div className="cart_icon">
            <i className="fa fa-shopping-cart " aria-hidden="true" onClick={showHideCart}></i>
            {cartItems.length>0 && <div className="items_count"><span>{cartItems.length}</span></div>}
        </div>
    </div>
  </nav>
};
