export const Title =({text}) =>{
    return (
        <div className="title">
           {text || "Default Title"} 
           <div className="title-underline"></div>
        </div>
       
    )
}