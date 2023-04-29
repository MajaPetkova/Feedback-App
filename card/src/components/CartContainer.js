import data from "../data";
import { CartItem } from "./CartItem";

export const CartContainer=() =>{
    return(
<section className="cart">
    <header>
        <h2>Your bag</h2>
    </header>
    <div>
     {data.map(x =>{
        return <CartItem key={x.id} {...x}/>
     })}
    </div>
    <footer>
        <hr />
        <div className="cart-total">
            <h4>
                total <span>$0.00</span>
            </h4>
        </div>
        <button className="btn clear-btn" onClick={console.log("clear all")}>Clear Cart</button>
    </footer>
</section>
    )
}