import "./productCart.css";


function ProductCart({imageUrl, name, price}) {
  return (
    <div className='cart'>
       <img src={imageUrl} alt="img"/>
       <div className="btnContainer" >
        <button className="btn">+</button>
       </div>
        <div className="cartContainer">
        <h3>{name}</h3>
        <h5>{price}.00$</h5>
        </div>

    </div>
  )
}

export default ProductCart;