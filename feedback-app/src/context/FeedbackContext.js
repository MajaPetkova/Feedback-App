import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    // {
    //   id: 1,
    //   text: "Feedback from Context 1",
    //   rating: 5,
    // },
    // {
    //   id: 2,
    //   text: "Feedback from Context 2",
    //   rating: 7,
    // },
    // {
    //   id: 3,
    //   text: "Feedback from Context 3",
    //   rating: 9,
    // },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
 
  // delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((x) => x.id !== id));
    }
  };
 // add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
// set item to update
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

const updateFeedback= (id, updatedItem)=>{
setFeedback(feedback.map((x)=> x.id === id ? {...x, ...updatedItem} : x))
}

  return (
    <FeedbackContext.Provider value={{ 
        feedback, 
        feedbackEdit, 
        deleteFeedback, 
        addFeedback, 
        editFeedback, 
        updateFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
