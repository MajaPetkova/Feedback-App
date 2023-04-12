import{useState} from "react";

export const Tour = ({ tours, removeTour }) => {
    const[readMore, setReadMore] = useState(false);
    // console.log(tours.info.substring(0, 10))
  return (
    <article className="single-tour">
      <img src={tours.image} alt="logo" className="img"/>
      <span className="tour-price">$ {tours.price}</span>
      <div className="info-tour">
        <h5>{tours.name}</h5>
        <p>{readMore ? tours.info : `${tours.info.substring(0, 100)}...`}</p>
        <button className="info-btn" onClick={()=> setReadMore(!readMore)}>{readMore ? "show less": "read more"}</button>
        <button type="button" className="btn" onClick={()=>removeTour(tours.id)}>not interested</button>
      </div>
    </article>
  );
};
