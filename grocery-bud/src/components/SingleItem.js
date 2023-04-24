import{useState} from "react";

export const SingleItem = ({ item, removeItem, editItem }) => {
    // const[isChecked, setIsChecked] = useState(item.completed);

  return (
    <div className="single-item">
      <div className="title">
        <input type="checkbox" checked={item.completed} onChange={(e) => editItem(item.id)}/>
        <p style={{textDecoration:item.completed && "line-through"}}>{item.name}</p>
      </div>
      <button onClick={()=>removeItem(item.id)} className="btn-remove">Delete</button>
    </div>
  );
};
