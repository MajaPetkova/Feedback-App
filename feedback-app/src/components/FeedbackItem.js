import {useState} from "react";


export const FeedBackItem = ({x}) => {
    // const [rating, setRating] = useState("");
    // const [text, setText] = useState("This is an example of an feedback item");
  return (
    <div className="card">
      <div className="num-display">{x.rating}</div>
      <div className="text-display">{x.text}</div>
   
    </div>
  );
};
