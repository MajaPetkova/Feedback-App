import React from "react";
import "./home.scss";
import { Featured } from "../../components/featured/Featured";
import { TrustedBy } from "../../components/trustedBy/TrustedBy";
import { Slide } from "../../components/slide/Slide";
import { cards } from "../../data";
import { CatCard } from "../../components/catCard/CatCard";

export const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={3}>
        {cards.map((x) => (
          <CatCard key={x.id} item={x} />
        ))}
      </Slide>
    </div>
  );
};
