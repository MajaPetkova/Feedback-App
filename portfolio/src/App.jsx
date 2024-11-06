import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import MyWork from "./components/mywork/MyWork";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import { createContext, useState } from "react";
import ReactSwitch from "react-switch"

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Navbar />
        <div className="switch-btn">
        <ReactSwitch onChange={toggleTheme} checked={theme==="light"}/>
        </div>
        <Hero />
        <About />
        <MyWork />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
