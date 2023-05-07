import { useContext, useRef, useEffect } from "react";
import { AppContext } from "../context";

export const Search = () => {
  const { setSearchTerm } = useContext(AppContext);
  const searchValue = useRef("");

  useEffect(()=>{
      searchValue.current.focus()
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit =(e) =>{
   e.preventDefault()
  }

  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            className="search-input"
            placeholder="martini"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};
