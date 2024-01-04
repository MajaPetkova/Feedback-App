import React from "react";
import "./message.scss";
import { Link } from "react-router-dom";

export const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadCrumbs">
          <Link to="/messages">MESSAGE </Link>>JOHN DOE>
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/99562/texture-handwriting-sutterlin-vintage-99562.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              modi incidunt corporis quisquam rerum voluptatum culpa, ad minus
              ipsam perspiciatis repudiandae consectetur adipisci laborum,
              fugiat amet ducimus minima. Magni aperiam libero dolorum dolor
              sunt vero corporis pariatur consequatur excepturi nobis.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/99562/texture-handwriting-sutterlin-vintage-99562.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              modi incidunt corporis quisquam rerum voluptatum culpa, ad minus
              ipsam perspiciatis repudiandae consectetur adipisci laborum,
              fugiat amet ducimus minima. Magni aperiam libero dolorum dolor
              sunt vero corporis pariatur consequatur excepturi nobis.
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/99562/texture-handwriting-sutterlin-vintage-99562.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              modi incidunt corporis quisquam rerum voluptatum culpa, ad minus
              ipsam perspiciatis repudiandae consectetur adipisci laborum,
              fugiat amet ducimus minima. Magni aperiam libero dolorum dolor
              sunt vero corporis pariatur consequatur excepturi nobis.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/99562/texture-handwriting-sutterlin-vintage-99562.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              modi incidunt corporis quisquam rerum voluptatum culpa, ad minus
              ipsam perspiciatis repudiandae consectetur adipisci laborum,
              fugiat amet ducimus minima. Magni aperiam libero dolorum dolor
              sunt vero corporis pariatur consequatur excepturi nobis.
            </p>
          </div>
        </div>
        <div className="write">
          <textarea
            name=""
            placeholder="Write a message..."
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};
