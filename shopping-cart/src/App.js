import { Navbar } from "./components/Navbar";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Cart/>
      <Home/>
    </div>
  );
}

export default App;
