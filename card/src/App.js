import { CartContainer } from "./components/CartContainer";
import { Navbar } from "./components/Navbar";
import {useContext} from "react";
import { AppContext } from "./context/context";


function App() {
  const {loading} = useContext(AppContext);
  if(loading) {
    return <main>
      <div className="loading" style={{marginTop:"100px", marginLeft:"200px"}}>Loading...</div>
    </main>
  }
  return <div className="App">
    <Navbar/>
    <CartContainer/>
    </div>;
}

export default App;
