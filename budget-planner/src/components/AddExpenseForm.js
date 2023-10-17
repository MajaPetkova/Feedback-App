import React from "react";

function AddExpenseForm() {
  return <form className="row">
    <div className="col-sm">
        <label htmlFor="name">Name</label>
        <input type="text" required="required" className="form-control" id="name" />
    </div>
    <div className="col-sm">
    <label htmlFor="cost">Cost</label> 
    <input type="text"required="required" className="form-control" id="cost"  />
    </div>
    <div className="row mt-3">
    <div className="col-sm">
     <button type="submit" className="btn btn-primary">Save</button>
    </div>
    </div>
  </form>;
}

export default AddExpenseForm;
