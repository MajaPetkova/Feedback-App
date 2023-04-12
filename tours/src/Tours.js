import { Tour } from "./Tour"

export const Tours =({tours}) =>{
    return(
        <section>
        <div className="title">
           <h4>our tours</h4>
           <div className="title-underline"></div>
           </div> 
           <div>{tours.map(x =><Tour key={x.id} tours={x}/> )}</div>  

       </section>
    )
}