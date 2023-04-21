import { useState } from "react";
import data from "./data";
import { Title } from "./components/Title";
import { Menu } from "./components/Menu";
import { Categories } from "./components/Categories";

const tempCategories = data.map((x) => x.category);
const tempSet = new Set(tempCategories);
const allCategories = ["all", ...tempSet];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((x) => x.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text={"Our Menu"} />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
