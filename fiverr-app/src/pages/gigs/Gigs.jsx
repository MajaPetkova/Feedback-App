import React, { useRef, useState, useEffect} from "react";
import "./gigs.scss";
import { gigs } from "../../data";
import { GigCard } from "../../components/gigCard.jsx/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

export const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();


  const { search } = useLocation();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}`)
        .then((res) => {
          return res.data;
        }),
  });
  console.log(data);

  const apply = () => {
  refetch()
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FIVERR > GRAPHICS & DESIGN > </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" ref={minRef} placeholder="min" />
            <input type="text" ref={maxRef} placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./images/down.png"
              alt=""
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong"
            : data.map((x) => <GigCard key={x._id} item={x} />)}
        </div>
      </div>
    </div>
  );
};
