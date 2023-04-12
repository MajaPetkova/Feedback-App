export const Tour = ({ tours, removeTour }) => {
  return (
    <article className="single-tour">
      <img src={tours.image} alt="logo" className="img"/>
      <span className="tour-price">$ {tours.price}</span>
      <div className="info-tour">
        <h5>{tours.name}</h5>
        <p>{tours.info}</p>
        <button type="button" className="btn" onClick={()=>removeTour(tours.id)}>not interested</button>
      </div>
    </article>
  );
};
