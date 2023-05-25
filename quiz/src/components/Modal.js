import { AppContext } from "../context";
import { useContext } from "react";

export const Modal = () => {
  const {closeModal, questions, correct, isModalOpen } = useContext(AppContext);
  return (
    <div className={`${isModalOpen ? "modal-container open" : "modal-container"}`}>
      <div className="modal-content">
        <h2>Congrats!</h2>
        <p>You answered {((correct/questions.length) * 100).toFixed(0)} % of questions correctly</p>
        <button className="close-btn btn" onClick={closeModal}>Play Again</button>
      </div>
    </div>
  );
};
