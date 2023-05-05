import { useContext } from "react";
import { AppContext } from "../context";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

export const ThemeToggle = () => {
  const { toggleDarkTheme, isDarkTheme } = useContext(AppContext);
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}  >
        {isDarkTheme ? <BsToggleOn/> : <BsToggleOff/>}
      </button>
    </section>
  );
};
