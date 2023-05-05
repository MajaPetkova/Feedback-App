import { useContext } from "react"
import { AppContext } from "../context"

export const ThemeToggle =() =>{
    const {greeting} = useContext(AppContext);
    console.log(greeting)
    return (
        <div>
       
        </div>
    )
}