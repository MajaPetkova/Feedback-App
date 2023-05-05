export const Search =() =>{
    const handleSubmit =(e) =>{
      e.preventDefault();
      const searchValue= e.target.search.value;
      console.log(searchValue)
      if(searchValue == ""){
        return;
      }
    }
    return (
        <section className="form-section">
            <h1 className="title">Unsplash images</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-input search input" name="search" placeholder="cat" />
                <button className="btn">Submit</button>
            </form>

        </section>
    )
}