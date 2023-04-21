import {useState} from "react";
import data from "./data";
import { Title } from "./components/Title";
import { Menu } from "./components/Menu";

const tempCategories = data.map(x=> x.category);
const tempSet = new Set(tempCategories);
const allCategories= ["all", ...tempSet];


function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);
  
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
