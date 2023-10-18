import { AppContext } from "../context/AppContext"
import {useContext} from "react"

function Budget() {
  const {budget} = useContext(AppContext)
  return (
    <div className='alert alert-secondary'>
       <span>Budget: {budget}$</span> 
    </div>
  )
}

export default Budget