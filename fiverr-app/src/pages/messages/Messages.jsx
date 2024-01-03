import React from "react";
import "./messages.scss";

export const Messages = () => {
  const message = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, provident fuga! Porro consequuntur nulla, alias error facere, maiores enim similique nihil facilis nam eligendi aliquam laborum, mollitia impedit commodi eius obcaecati aut distinctio exercitationem dolore nesciunt? Ipsum, hic?"
      return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>{message.substring(0,100)}...</td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>{message.substring(0,100)}...</td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>{message.substring(0,100)}...</td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>{message.substring(0,100)}...</td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>
           John Doe
            </td>
            <td>{message.substring(0,100)}...</td>
            <td>1 day ago</td>
            <td><button>Mark as Read</button></td>
          
          </tr>
        </table>
      </div>
    </div>
  );
};
