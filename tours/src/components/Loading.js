import loadingSpinner from "./assets/loading.gif";
export const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingSpinner} alt="loading" />
    </div>
  );
};
