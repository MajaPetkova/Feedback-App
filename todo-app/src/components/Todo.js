import {FaRegEdit, FaTrashAlt} from "react-icons/fa"

export const Todo=({x})=>{
    return (
        <div className="todo">
            <p>
        {x.task}
            </p>
<div className="buts">
<FaRegEdit/>
<FaTrashAlt/>
</div>
        </div> 
    )
}