import {useState} from "react";


export const FeedBackItem = () => {
    const [rating, setRating] = useState(7);
    const [text, setText] = useState("This is an example of an feedback item");
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
};
