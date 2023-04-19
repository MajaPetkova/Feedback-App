import { SingleQuestions } from "./Question"

export const Questions =({questions, activeId, toggleQuestion})=>{
    return(
        <section className="container">
            <h1>Questions</h1>
            {questions.map(x=> <SingleQuestions key={x.id} {...x} activeId={activeId} toggleQuestion={toggleQuestion}/>
            )}
        </section>
    )
}