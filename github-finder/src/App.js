import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <main>
          Content
        </main>
      </div>
    </Router>
  );
}

export default App;
