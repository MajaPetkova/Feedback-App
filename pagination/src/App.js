import stock from "./stock.jpg"
function App() {
  return (
    <main>
    <div className="app">
      <h2>Pagination </h2>
      <div className="underline"></div>
    </div>
    <section className="followers">
      <div className="container">
        <article className="card">
          <img src={stock} alt="" className="img"/>
          <h4>name</h4>
          <button> view profile</button>
        </article>
        <article className="card">
          <img src={stock} alt="" className="img"/>
          <h4>name</h4>
          <button className="btn"> view profile</button>
        </article>
        <article className="card">
          <img src={stock} alt="" className="img"/>
          <h4>name</h4>
          <button> view profile</button>
        </article>
        <article className="card">
          <img src={stock} alt="" className="img"/>
          <h4>name</h4>
          <button className="btn"> view profile</button>
        </article>
        <article className="card">
          <img src={stock} alt="" className="img"/>
          <h4>name</h4>
          <button> view profile</button>
        </article>
        <article className="card">
          <img src={stock} alt="" className="img"/>
          <h4>name</h4>
          <button className="btn"> view profile</button>
        </article>
      </div>
       <div className="btn-container">
        <button className="pgn">1</button>
       </div>
    </section>
    </main>
  );
}

export default App;
