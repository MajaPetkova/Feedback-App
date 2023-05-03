import { useState } from "react"

export const UseToggle =(defaultValue )=>{
    const[show, setShow]= useState(defaultValue);

    const toggle =()=>{
        setShow(!show)
    }
    return {show, toggle}
}