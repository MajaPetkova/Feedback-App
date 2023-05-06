import {BrowserRouter, Route, Routes} from "react-router-dom"
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ProductsPage } from "./components/Products";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  return (
  <BrowserRouter>
  {/* <nav>Our Navbar</nav> */}
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/products" element={<ProductsPage/>}/>
    <Route path="*" element={<ErrorPage/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
