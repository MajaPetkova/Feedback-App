import { FeedBackItem } from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { Spinner } from "./shared/Spinner";


export const FeedbackList = () => {

  const {feedback, isLoading} = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }
  return isLoading ? <Spinner/> : (<div className="feedback-list">
  <AnimatePresence>
    {feedback.map((x) => (
      <motion.div
        key={x.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <FeedBackItem key={x.id} x={x} 
        // closeHandler={closeHandler} 
        />
      </motion.div>
    ))}
  </AnimatePresence>
</div>);
 };
