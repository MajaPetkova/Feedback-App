export const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((x) => (
        <button
          type="button"
          className="btn"
          key={x}
          onClick={() => filterItems(x)}
        >
          {x}
        </button>
      ))}
    </div>
  );
};
