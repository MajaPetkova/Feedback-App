import { Loading } from "./components/Loading";
import { SetupForm } from "./components/SetupForm";
import { AppContext } from "./context";
import { useContext } from "react";

function App() {
  const { isLoading, waiting, questions, index, correct } = useContext(AppContext);

  if(waiting) {
    return <SetupForm/>
  }

  if (isLoading) {
    return <Loading />;
  }
    const {question, correct_answer, incorrect_answers} = questions[0];
    const answers= [...incorrect_answers, correct_answer]
  return (
    <main>
      
    </main>
  );
}

export default App;
