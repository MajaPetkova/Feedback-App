import { SingleColor } from "./SingleColor"
import {nanoid} from "nanoid";

export const ColorList=({colors})=>{
return(
    <section className="colors">
        {colors.map((x, index) => {
            return <SingleColor color={x} index={index} key={nanoid()}/>
        })}
    </section>
)
}