import { ProductCard } from "../components/ProductCard";
import products from "../data";


export const Home=()=>{
 
    return(
        <div className="products_wrapper">
         {products.map((x)=>(
            <ProductCard x={x} key={x._id}/>
         ))}
        </div>
    )
}