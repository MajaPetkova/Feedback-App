import { useState } from "react";

export const Form = ({addColor}) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color)
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <input
        type="color"
        className="head"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <form onSubmit={handleSubmit} className="color-form">
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button className="btn" type="submit" style={{ background: color, border: color }}>
          Generate
        </button>
      </form>
    </section>
  );
};
