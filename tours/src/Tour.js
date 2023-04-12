export const Tour = ({ tours }) => {
  return (
    <article className="single-tour">
      <img src={tours.image} alt="logo" className="img"/>
      <span className="tour-price">$ {tours.price}</span>
      <div className="info-tour">
        <h5>{tours.name}</h5>
        <p>{tours.info}</p>
      </div>
    </article>
  );
};
