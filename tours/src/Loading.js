import loadingSpinner from "../src/components/assets/loading.gif";
export const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingSpinner} alt="loading" />
    </div>
  );
};
