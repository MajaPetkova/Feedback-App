import { v4 as uuidv4 } from "uuid";

export const Rating = ({ value, numReviews }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((x) => (
        <span key={uuidv4()}>
          <i
            className={
              value + 1 === x + 0.5
                ? "fas fa-star-half-alt"
                : value >= x
                ? "fas fa-star"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
      <p>{numReviews? `${numReviews} reviews`: "" }</p>
    </div>
  );
};
