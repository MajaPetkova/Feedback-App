import { Tour } from "./Tour"

export const Tours =({tours, removeTour}) =>{
    return(
        <section>
        <div className="title">
           <h4>Our Tours</h4>
           <div className="title-underline"></div>
           </div> 
           <div className="tours-section">{tours.map(x =><Tour key={x.id} tours={x} removeTour={removeTour} /> )}</div>  

       </section>
    )
}