import { useState, useEffect } from "react";
import { UseFetch } from "./UseFetch";
import { Follower } from "./components/Follower";

function App() {
  const { loading, data } = UseFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) {
      return;
    }
    setFollowers(data[page]);
  }, [loading, page]);
  
  const handlePage =(index) =>{
   setPage(index)

  }

  return (
    <main>
      <div className="app">
        <h2>{loading ? "Loading..." : "Pagination"} </h2>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((x) => {
            return <Follower key={x.id} {...x} />;
          })}
        </div>
        {!loading &&  <div className="btn-container">
        {data.map((item, index)=> {return<button className={`pgn ${index===page ? "active": ""}`} key={index} onClick={()=>handlePage(index)}>{index +1}</button> })} 
        </div>}
       
      </section>
    </main>
  );
}

export default App;
