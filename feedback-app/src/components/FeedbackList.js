import { FeedBackItem } from "./FeedbackItem";


export const FeedbackList = ({feedback, closeHandler}) => {
    if(!feedback || feedback.length == 0 ){
       return <p>No Feedback Yet</p>
    }
  return (
    <div className="feedback-list">
        {feedback.map((x)=> (
           <FeedBackItem key={x.id} x={x} closeHandler={closeHandler}></FeedBackItem>
        ))}
    </div>
  )
};
