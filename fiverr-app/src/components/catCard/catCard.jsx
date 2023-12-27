import React from 'react'
import "./catCard.scss";
import { Link } from "react-router-dom";

export const CatCard = ({...x}) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
      <img src={x.img} alt="" />
      <span className="desc">{x.desc}</span>
      <span className="title">{x.title}</span>
      </div>
    </Link>
    
  )
}
