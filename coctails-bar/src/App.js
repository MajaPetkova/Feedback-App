import {Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Error } from "./pages/Error";
import { SingleCocktail } from "./pages/SingleCocktail";


function App() {
  return (
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/cocktail/:id" element={<SingleCocktail/>}/>
    <Route path="/*" element={<Error/>}/>
  </Routes>
  );
}

export default App;
