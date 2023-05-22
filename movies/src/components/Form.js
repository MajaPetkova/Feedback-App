import { useContext } from "react";
import { AppContext } from "../context";

export const Form = () => {
  const { query, setQuery,error } = useContext(AppContext);

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-container" onSubmit={submitForm}>
      <h2>Search Movies</h2>
      <input type="text" onChange={(e) => setQuery(e.target.value)} value={query} />
      <p className="error">{error.show && error.msg }</p>
    </form>
  );
};
