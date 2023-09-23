import React from 'react'
import { shopData } from '../../shopData'
import ProductCart from '../productCart/ProductCart'
import "./products.css"

function Products() {
  return (
    <div className='container'>
        <h3>Welcome to our MM Clothing Store</h3>
        <div className='productWrapper'>
            {shopData.map((x, index)=>{
                  <ProductCart key={index} {...x} /> 
            })}
        </div>
    </div>
  )
}

export default Products