import { Card } from "./shared/Card";
import {FaTimes} from "react-icons/fa";

export const FeedBackItem = ({x, closeHandler}) => {
    // const [rating, setRating] = useState("");
    // const [text, setText] = useState("This is an example of an feedback item");

  

  return (
    <Card >
      <div className="num-display">{x.rating}</div>
      <button onClick={()=> closeHandler(x.id)} className="close"><FaTimes color="purple"/></button>
      <div className="text-display">{x.text}</div>
    </Card>
  );
};
