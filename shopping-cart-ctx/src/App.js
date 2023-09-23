import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
   <div className="titleMain">useReducer Hook and useContext Project</div>
   <div className="main">
   <Link to="/">Home</Link>
   <Link to="/cart">Cart</Link>
   </div>
   <Routes>
   <Route path="/" element={<Products/>}></Route>
   <Route path="/cart" element={<Cart/>}></Route>
   </Routes>
    </BrowserRouter>
  );
}

export default App;

