import { useEffect, useState } from "react";
import { Article } from "./Article";
import articles from "./data";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
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
