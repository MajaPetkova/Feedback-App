import { useContext } from "react";
import { AppContext } from "../context/context";
import { FaTimes } from "react-icons/fa";

export const Modal = () => {
  const { isModalOpen, closeModal } = useContext(AppContext);


  return <div className={isModalOpen ? "modal-overlay show-modal": "modal-overlay"}>
   <div className="modal-container">
    <h3>Modal Content</h3>
    <button className="btn-close" onClick={closeModal}><FaTimes/></button>
   </div>
  </div>;
};
