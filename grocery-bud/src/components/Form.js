import{useState} from "react"

export const Form = () => {
    const[newItemName, setNewItemName] = useState("");

    const handleSubmit =(e) =>{
     e.preventDefault();
     console.log(newItemName)
    }
    return(
        <div className="form-block">
            <h4>Grocery Bud</h4>
            <form  onSubmit={handleSubmit}>
            <input type="text" className="input-text" value={newItemName} onChange={(e) =>setNewItemName(e.target.value)} />
            <button className="btn" type="submit">Add Item</button>
            </form>
        </div>
    )
};
