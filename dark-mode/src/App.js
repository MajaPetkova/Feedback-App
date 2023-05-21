import { useEffect, useState } from "react";
import { Article } from "./Article";
import articles from "./data";

function App() {
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);


  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };


  return (
    <main>
      <nav>
        <div className="container">
          <h1>Overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            Toggle
          </button>
        </div>
      </nav>
      {articles.map((x) => {
        return <Article key={x.id} {...x}></Article>;
      })}
    </main>
  );
}

export default App;
