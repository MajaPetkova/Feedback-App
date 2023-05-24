import { Loading } from "./components/Loading";
import { Modal } from "./components/Modal";
import { SetupForm } from "./components/SetupForm";
import { AppContext } from "./context";
import { useContext } from "react";

function App() {
  const { isLoading, waiting, questions, index, correct, nextQuestion, checkAnswer } = useContext(AppContext);

  if(waiting) {
    return <SetupForm/>
  }

  if (isLoading) {
    return <Loading />;
  }

    const {question, correct_answer, incorrect_answers} = questions[index];
    const answers = [...incorrect_answers, correct_answer]
  return (
    <main>
      {/* <Modal/> */}
      <section className="question-container">
         <p className="correct-ans">correct answers: {correct}/{index}</p>
        <article className="question">
          <h2 dangerouslySetInnerHTML={{__html : question}}/>
            <div className="btn-container">
               {answers.map((x, index)=>{
                  return <button key={index} dangerouslySetInnerHTML={{__html: x}} onClick={()=>checkAnswer(correct_answer===x)} className="answer-btn"/>
                })}
            </div>
       </article>
         <button className="next-question" onClick={nextQuestion}>Next Question</button>
      </section>
    </main>
  );
}

export default App;
