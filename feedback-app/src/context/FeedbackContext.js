// import { createContext, useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// const FeedbackContext = createContext();

// export const FeedbackProvider = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [feedback, setFeedback] = useState([]);
//   // {
//   //   id: 1,
//   //   text: "Feedback from Context 1",
//   //   rating: 5,
//   // },
//   // {
//   //   id: 2,
//   //   text: "Feedback from Context 2",
//   //   rating: 7,
//   // },
//   // {
//   //   id: 3,
//   //   text: "Feedback from Context 3",
//   //   rating: 9,
//   // },

//   useEffect(() => {
//     fetchFeedback();
//   }, []);

//   // fetch feedback
//   const fetchFeedback = async () => {
//     const res = await fetch(
//       "http://localhost:5000/feedback?_sort=id&_order=desc"
//     );
//     const data = await res.json();
//     setFeedback(data);
//     setIsLoading(false);
//   };

//   const [feedbackEdit, setFeedbackEdit] = useState({
//     item: {},
//     edit: false,
//   });

//   // delete feedback
//   const deleteFeedback = async(id) => {
//     if (window.confirm("Are you sure you want to delete this feedback?")) {
//         await fetch(`http://localhost:5000/feedback/${id}`, {
//             method: "DELETE",})
//       setFeedback(feedback.filter((x) => x.id !== id));
//     }
//   };
//   // add feedback
//   const addFeedback =  async(newFeedback) => {
//     const res = await fetch("http://localhost:5000/feedback", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newFeedback)
//     });
//     const data= await res.json()
//     console.log(data)

//     // newFeedback.id = uuidv4();
//     setFeedback([data, ...feedback]);
//   };
//   // set item to update
//   const editFeedback = (item) => {
//     setFeedbackEdit({
//       item,
//       edit: true,
//     });
//   };

//   const updateFeedback = async (id, updatedItem) => {
//     const res= await fetch(`http://localhost:5000/feedback/${id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body:JSON.stringify(updatedItem)
//     });
//     const data= await res.json()
//     setFeedback(feedback.map((x) => (x.id === id ? { ...x, ...data } : x))
//     );
//   };

//   return (
//     <FeedbackContext.Provider
//       value={{
//         feedback,
//         feedbackEdit,
//         isLoading,
//         deleteFeedback,
//         addFeedback,
//         editFeedback,
//         updateFeedback,
//       }}
//     >
//       {children}
//     </FeedbackContext.Provider>
//   );
// };
// export default FeedbackContext;
import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This review is from context 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This review is from context 2',
      rating: 9
    },
    {
      id: 3,
      text: 'This review is from context 3',
      rating: 7
    }
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete ?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(feedback
      .map((item) => item.id === id
        ? { ...item, ...updItem }
        : item))

    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }


  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }


  return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;
