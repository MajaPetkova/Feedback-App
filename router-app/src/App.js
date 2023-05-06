import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ProductsPage } from "./components/Products";
import { ErrorPage } from "./components/ErrorPage";
import {SingleProduct} from "./components/SingleProduct"
function App() {
  return (
    <BrowserRouter>
      {/* <nav>Our Navbar</nav> */}
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProduct/>} />
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
        <Route path="/dashboard" element={<h2>Dashboard</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
