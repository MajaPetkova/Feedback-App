import { useState } from "react";
import { shortList, longList, list } from "../data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const Carousel = () => {
  const [people, setPeople] = useState(shortList);
  return (
    <section className="slider-container">
      {people.map((p) => {
        const { id, image, name, title, quote } = p;
        return (
          <article className="slide" key={id}>
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <div className="btn">
        <button className="prev">
          <FiChevronLeft />
        </button>
        <button className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};
