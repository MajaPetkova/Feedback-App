import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export const SingleQuestions = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header className="title">
        <h4>{title}</h4>
        <button className="question-btn" onClick={()=>setShowInfo(!showInfo)}><AiOutlineMinus/></button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};
