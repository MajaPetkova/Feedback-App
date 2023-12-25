import React from "react";
import "./featured.scss";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1 className="title">
            Find the perfect freelance service for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="" alt="" />
              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button>Search</button>
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
            <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
