import { useContext } from "react";
import { AppContext } from "../context/context";
import { FaBars } from "react-icons/fa";

export const Home = () => {
  const { openSidebar, openModal } = useContext(AppContext);
  // console.log(openModal)
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </main>
  );
};
