import { useContext } from "react";
import { AppContext } from "../context";
import Spinner from "../assets/loading.png";

export const Stories = () => {
  const { isLoading, hits } = useContext(AppContext);

  if (isLoading) {
    return (
      <div className="loading">
        <img src={Spinner} alt="Loading..." />
      </div>
    );
  }

  return <div>
    
  </div>;
};
