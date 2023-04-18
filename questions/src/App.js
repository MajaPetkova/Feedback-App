
import { Questions } from './components/Questions';
import data from "./data";
import{useState} from "react"

function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <main className="">
   
     <Questions questions={questions}/>
        </main>
  );
}

export default App;
