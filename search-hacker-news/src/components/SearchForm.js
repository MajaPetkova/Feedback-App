import { useContext } from "react";
import { AppContext } from "../context";

export const SearchForm = () => {
    const {handleSearch, query} = useContext(AppContext)
  return (
    <div className="form">
      <h3>Search Hacker News</h3> 
      <form onSubmit={(e)=>e.preventDefault()} >
        <input type="text"  value={query} onChange={(e)=> handleSearch(e.target.value)}/>
      </form>
    </div>
  );
};
