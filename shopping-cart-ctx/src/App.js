import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";

function App() {
  return (
    <BrowserRouter>
   <div>useReducer Hook and useContext Project</div>
   <>
   <Link to="/">Home</Link>
   <Link to="/cart">Cart</Link>
   </>
   <Routes>
   <Route path="/" element={<Products/>}></Route>
   <Route path="/cart" element={<Cart/>}></Route>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
