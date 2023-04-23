export const SingleItem = ({ item, removeItem }) => {
  return (
    <div className="single-item">
      <div className="title">
        <input type="checkbox" />
        <p>{item.name}</p>
      </div>
      <button onClick={removeItem} className="btn-remove">Delete</button>
    </div>
  );
};
