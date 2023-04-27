import{ useContext } from "react";
import { AppContext } from "./context/Context";

function App() {
  const {isSidebarOpen} = useContext(AppContext);
  console.log(isSidebarOpen)
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
