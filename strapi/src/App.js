import{ useContext } from "react";
import { AppContext } from "./context/Context";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Sidebar } from "./components/Sidebar";
import { Submenu } from "./components/Submenu";

function App() {
  const {isSidebarOpen} = useContext(AppContext);
  console.log(isSidebarOpen)
  return (
   <main>
    <Navbar/>
    <Hero/>
    <Sidebar/>
    <Submenu/>
   </main>
  );
}

export default App;
