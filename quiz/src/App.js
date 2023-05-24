import { Loading } from "./components/Loading";
import { SetupForm } from "./components/SetupForm";
import { AppContext } from "./context";
import { useContext } from "react";

function App() {
  const { isLoading, waiting, question, index, correct } = useContext(AppContext);

  if(waiting) {
    return <SetupForm/>
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <h2>Quiz starter</h2>
    </main>
  );
}

export default App;
