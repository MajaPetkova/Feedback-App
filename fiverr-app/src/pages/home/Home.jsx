import React from "react";
import "./home.scss";
import { Featured } from "../../components/featured/Featured";
import { TrustedBy } from "../../components/trustedBy/TrustedBy";
import { Slide } from "../../components/slide/Slide";
import { cards } from "../../data";
import { CatCard } from "../../components/catCard/CatCard";

export const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={3}>
        {cards.map((x) => (
          <CatCard key={x.id} item={x} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./images/check.png" alt="" />
              <h4>The best for every budget</h4>
            </div>
              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              <h4>The best for every budget</h4>
            </div>
              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              <h4>The best for every budget</h4>
            </div>
              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              <h4>The best for every budget</h4>
            </div>
              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
          </div>
          <div className="item">
            <video src="./images/video.mp4" controls></video>
          </div>
        </div>
      </div>
    </div>
  );
};
