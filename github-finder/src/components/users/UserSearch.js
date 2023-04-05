
export const UserSearch = () => {
   return(
    <div className="search">
        <div className="form">
            <form className="form-control">
             <input placeholder="Search"/>
             <button className="btn-search">Go</button>
            </form>
        </div>
        <button className="btn-clear">
            Clear
        </button>
    </div>
   ) 
};
