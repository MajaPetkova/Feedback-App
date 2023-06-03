import {useState} from "react";

export const TodoForm= ()=>{
    const[input, setInput] = useState("");

    const handleChange=(e)=>{
        setInput(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        setInput("")
    }
    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a todo" name= "text" className="form-input" value={input} onChange={handleChange}/>
            <button className="btn">Add Todo</button>
            </form>
        </div>
    )
}