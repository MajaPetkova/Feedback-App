import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export const SingleQuestions = ({
  id,
  title,
  info,
  activeId,
  toggleQuestion,
}) => {
  const isActive = id === activeId;

  return (
    <article className="question">
      <header className="title">
        <h4>{title}</h4>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};
