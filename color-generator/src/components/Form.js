import{useState} from "react";


export const Form= () =>{
    const[color, setColor] = useState("");
    const handleSubmit=(e)=>{
      e.preventDefault();

    }

    return(
       <section className="container">
        <h4>color generator</h4>
        <form onSubmit={handleSubmit} className="color-form">
          <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="#f15025"/>
          <button className="btn" type="submit" style={{background:color}}>Generate</button>
        </form>
       </section>
    )
}