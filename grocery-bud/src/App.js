import{useState} from "react"
import { Form } from "./components/Form";


function App() {
  const [items, setItems] = useState([]);
  
  return (
    <section className="container">
     <Form/>
    </section>
  );
}

export default App;
