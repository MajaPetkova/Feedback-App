import{useState} from "react";

export const SingleItem = ({ item, removeItem }) => {
    const[isChecked, setIsChecked] = useState(item.completed);

  return (
    <div className="single-item">
      <div className="title">
        <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(!isChecked)}/>
        <p style={{textDecoration:isChecked && "line-through"}}>{item.name}</p>
      </div>
      <button onClick={()=>removeItem(item.id)} className="btn-remove">Delete</button>
    </div>
  );
};
