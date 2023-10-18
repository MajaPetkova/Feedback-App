import React from "react";
import {useState} from "react";


function AddExpenseForm() {
    const [name, setName] = useState("");
    const[ cost, setCost] = useState("");

  return <form className="row">
    <div className="col-sm">
        <label htmlFor="name">Name</label>
        <input type="text" required="required" className="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="col-sm">
    <label htmlFor="cost">Cost</label> 
    <input type="text"required="required" className="form-control" id="cost" value={cost} onChange={(e)=>setCost(e.target.value)} />
    </div>
    <div className="row mt-3">
    <div className="col-sm">
     <button type="submit" className="btn btn-primary">Save</button>
    </div>
    </div>
  </form>;
}

export default AddExpenseForm;
