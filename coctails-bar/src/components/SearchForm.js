import { AppContext } from "../context";
import { useContext, useEffect, useRef } from "react";

export const SearchForm = () => {
  const { setSearchTerm } = useContext(AppContext);
  const searchValue = useRef();

  useEffect(()=>{
    searchValue.current.focus()
  },[])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Search your favorite cocktail</label>
        <input
          type="text"
          id="name"
          ref={searchValue}
          onChange={searchCocktail}
        />
      </form>
    </div>
  );
};
