// import { useContext } from "react";
// import { AppContext } from "./context";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Movie } from "./components/Movie";

function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<Movie />} />
    </Routes>
  );
}

export default App;
