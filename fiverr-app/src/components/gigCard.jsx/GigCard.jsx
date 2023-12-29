import React from "react";
import "./gigCard.scss";
import { Link } from "react-router-dom";

export const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123456">
      <div className="gigCard">
        <div className="container">
          <img src={item.img} alt="" />
          <div className="info">
            <div className="user">
                <img src={item.pp} alt="" />
                <span>{item.username}</span>
            </div>
            <p>{item.desc}</p>
            <div className="star">
                
            </div>
          </div>
          <div className="details"></div>
        </div>
      </div>
    </Link>
  );
};
