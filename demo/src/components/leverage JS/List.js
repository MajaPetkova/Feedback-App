import { people } from "../../data"
import middle from "./middle.png"

export const List =() =>{
    return(
        <div>
            {people.map(x=> <Person {...x} key={x.id}/> )}
        </div>
    )
}
const Person= ({name, nickName = "Shake and bake", images}) =>{
    const img =images?.[0]?.small?.url || middle;
    // images && images[0] && images[0].small && images[0].small.url
    return (
        <div className="person" >
            <img src={img} alt={name} style={{width:"50px"}}/>
            <p>{name}</p>
            <p>Nickname:{nickName}</p>
        </div>
    )
}