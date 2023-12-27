import React from "react";
import "./slide.scss";
import Carousel from "@itseasy21/react-elastic-carousel";
import { CatCard } from "../catCard/CatCard";
import { cards } from "../../data";

export const Slide = () => {
  return (
    <div className="slide">
      <div className="container">
        <Carousel>
          {cards.map((x) => (
            <CatCard key={x.id} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
