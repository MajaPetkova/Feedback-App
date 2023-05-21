import { Article } from "./Article";
import articles from "./data"; 

function App() {
  return (
 <main>
<nav>
  <div className="container">
    <h1>Overreacted</h1>
    <button className="btn">Toggle</button>
  </div>
</nav>
{articles.map(x=> {
  return <Article key={x.id} {...x}></Article>
})}
 </main>
  );
}

export default App;
