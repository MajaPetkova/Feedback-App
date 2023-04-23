import { useState } from "react";
import { ColorList } from "./components/ColorList";
import { Form } from "./components/Form";
import Values from "values.js";

function App() {
  const [colors, setColors] = useState([]);
  // console.log(new Values("#f15025").all(10))

  const addColor =(color) =>{
    try{
    const newColors=  new Values(color).all(10);
    setColors(newColors)
    }catch(err){
      alert(err.message)
    }
  }
  return (
    <main>
      <Form addColor={addColor}/>
      <ColorList colors={colors}/>
    </main>
  );
}

export default App;
