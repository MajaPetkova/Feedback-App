import loading from "../layout/assets/loading-gif.gif";

export const Spinner = () => {
  return (
    <div className="spinner">
      <img className="spinner" src={loading} alt="Loading..." />
    </div>
  );
};
