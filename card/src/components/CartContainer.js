
export const CartContainer=() =>{
    return(
<section className="cart">
    <header>
        <h2>Your bag</h2>
    </header>
    <div>

    </div>
    <footer>
        <hr />
        <div className="cart-total">
            <h4>
                total <span>$0.00</span>
            </h4>
        </div>
        <button className="btn clear-btn">Clear Cart</button>
    </footer>
</section>
    )
}