import { useState } from "react";
import ReactMarkdown from "react-markdown";


function App() {
  const [markdown, setMarkdown]= useState("## Markdown Preview  ![image](https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-10/girl-names-that-start-with-c-zz-221027-768b76.jpg) **be happy**");

  return (
    <main className="markdown">
      <section className="input">
        <textarea type="input" value={markdown} onChange={(e)=> setMarkdown(e.target.value)}>
        </textarea>
        <article className="result">
        <ReactMarkdown>
         {markdown}
        </ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
