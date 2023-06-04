import { useState } from "react"
import { FormSignUp } from "./FormSignUp"
import { FormSuccess } from "./FormSuccess";

export const Form =() =>{
    const [isSubmitted, setIsSubmitted]= useState(false);

    function submitForm(){
        setIsSubmitted(true)
    }
    return (
        <div className="main-container">
            {/* <span className="close-btn">x</span> */}
            <div className="container-left">
                <img src="images/space.webp" alt="spaceship" />
            </div>
          {!isSubmitted ? <FormSignUp submitForm={submitForm}/> : <FormSuccess/>}
        </div>
    )
}