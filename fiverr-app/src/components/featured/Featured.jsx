import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./featured.scss";

export const Featured = () => {
  const [input, setInput] = useState("");
  const navigate= useNavigate()

  const handleSearch= ()=>{
    navigate(`/gigs?search=${input}`)
  }
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1 className="title">
            Find the perfect <i>freelance</i> service for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./images/search.png" alt="" />
              <input type="text" placeholder='Try "building mobil app"' onChange={(e)=>setInput(e.target.value)}/>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
            <img src="./images/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};
