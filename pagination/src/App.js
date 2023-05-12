import { UseFetch } from "./UseFetch";
import { Follower } from "./components/Follower";


function App() {
  const {loading, data} = UseFetch()

  return (
    <main>
    <div className="app">
      <h2>{loading ?"Loading..." :  "Pagination"} </h2>
      <div className="underline"></div>
    </div>
    <section className="followers">
      <div className="container">
       {data.map((x)=> <Follower key={x.id} {...x}/>)}
      </div>
       <div className="btn-container">
        {/* <button className="pgn">1</button> */}
       </div>
    </section>
    </main>
  );
}

export default App;
