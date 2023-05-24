import spinner from "../assets/loading.png"

export const Loading = () => {
  return <div className="loading">
    <img src={spinner} alt="Loading..." />
  </div>;
};
