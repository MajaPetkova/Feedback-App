import { SingleQuestions } from "./Question"

export const Questions =({questions})=>{
    return(
        <section className="container">
            <h1>Questions</h1>
            {questions.map(x=> <SingleQuestions key={x.id} {...questions}/>
            )}
        </section>
    )
}