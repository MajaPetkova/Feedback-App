import { useContext } from "react"
import { AlertContext } from "../../context/alert/AlertContext"

export const Alert= () =>{
    const {alert} = useContext(AlertContext);


    return(
        alert !== null && (<p className="alert-msg">{alert.msg}</p>)
    )
}