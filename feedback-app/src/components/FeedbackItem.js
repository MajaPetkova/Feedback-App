import { Card } from "./shared/Card";
import {FaTimes, FaEdit, } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

export const FeedBackItem = ({x}) => {
    // const [rating, setRating] = useState("");
    // const [text, setText] = useState("This is an example of an feedback item");

  const { deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card >
      <div className="num-display">{x.rating}</div>
      <button onClick={()=> deleteFeedback(x.id)} className="close"><FaTimes color="purple"/></button>
      <button onClick={()=>editFeedback(x)} className="edit"><FaEdit color="purple"/></button>
      <div className="text-display">{x.text}</div>
    </Card>
  );
};
