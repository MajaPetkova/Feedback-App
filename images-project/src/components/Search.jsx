import { useContext } from "react";
import { AppContext } from "../context";

export const Search =() =>{
    const{setSearchTerm}= useContext(AppContext)
    const handleSubmit =(e) =>{
      e.preventDefault();
      const searchValue= e.target.search.value;
      if(searchValue == ""){
          return;
        }
        setSearchTerm(searchValue)
    }
    return (
        <section className="form-section">
            <h1 className="title">Unsplash images</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-input search input" name="search" placeholder="monkey" />
                <button className="btn">Submit</button>
            </form>

        </section>
    )
}