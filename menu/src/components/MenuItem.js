export const MenuItem = ({ ...x }) => {
  return (
    <article className="menu-item">
      <img src={x.img} alt={x.title} className="image" />
      <div className="item-info">
        <header>
          <h5>{x.title}</h5>
          <span className="item-price">$ {x.price}</span>
        </header>
        <p className="item-text">{x.desc}</p>
      </div>
    </article>
  );
};
