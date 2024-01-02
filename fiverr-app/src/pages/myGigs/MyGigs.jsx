import React from "react";
import "./myGigs.scss";
import { Link } from "react-router-dom";

export const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">Add New Gig</Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>

            <td>Gig1</td>
            <td>88$</td>
            <td>1234</td>
            <td><img src="/images/delete.png" alt="" /></td>
          </tr>
        </table>
      </div>
    </div>
  );
};
