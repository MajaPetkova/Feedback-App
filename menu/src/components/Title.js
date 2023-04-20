export const Title =({text}) =>{
    return (
        <div>
           {text || "Default Title"} 
           <div className="title-underline"></div>
        </div>
       
    )
}