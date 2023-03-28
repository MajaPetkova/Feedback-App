export const FeedbackStats = ({ feedback }) => {
  let averageRating = feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;


  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 :  averageRating.toFixed(1).replace(/[.,]0$/, "")}</h4>
    </div>
  );
};
