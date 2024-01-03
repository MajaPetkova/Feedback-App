import React from "react";
import "./orders.scss";
import { Link } from "react-router-dom";

export const Orders = () => {
  const currentUser = { id: 1, username: "John Doe", isSeller: true };

  return (
    <div className="myOrders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ?  "Buyer": "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>

            <td>Gig1</td>
            <td>88$</td>
            <td>1234</td>
            <td>
              <img src="/images/message.png" alt="" className="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>

            <td>Gig1</td>
            <td>88$</td>
            <td>1234</td>
            <td>
              <img src="/images/message.png" alt="" className="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>

            <td>Gig1</td>
            <td>88$</td>
            <td>1234</td>
            <td>
              <img src="/images/message.png" alt="" className="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>

            <td>Gig1</td>
            <td>88$</td>
            <td>1234</td>
            <td>
              <img src="/images/message.png" alt="" className="delete" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>

            <td>Gig1</td>
            <td>88$</td>
            <td>1234</td>
            <td>
              <img src="/images/message.png" alt="" className="delete" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
