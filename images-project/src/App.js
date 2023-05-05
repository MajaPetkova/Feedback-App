import { Gallery } from "./components/Gallery";
import { Search } from "./components/Search";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <main>
      <ThemeToggle />
      <Search />
      <Gallery />
    </main>
  );
}

export default App;
