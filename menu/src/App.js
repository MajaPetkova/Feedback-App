import { Title } from "./components/Title";
import {useState} from "react";
import data from "./data";
import { Menu } from "./components/Menu";

function App() {
  const [menuItems, setMenuItems] = useState(data)

  return (
    <main>
      <section className="menu">
        <Title text={"Our Menu"}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
