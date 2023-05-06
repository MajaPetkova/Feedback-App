import { Link } from "react-router-dom";
import data from "../data";
import { SingleProduct } from "./SingleProduct";

export const ProductsPage =() =>{
    return(
        <div>
            <h2>Products</h2>
            <div className="products">
               {data.map(x => {
                return <article key={x.id}>
                <h2>{x.name}</h2>
                <Link to={`/products/${x.id}`} >more info</Link>
                </article>
               })}
            </div>
        </div>
    )
}