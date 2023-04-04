import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <main>
          Content
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
