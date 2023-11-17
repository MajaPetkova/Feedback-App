import "./App.css";
import data from "./mock-data.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(data);


  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(x => (<tr>
            <th>{x.fullName}</th>
            <th>{x.address}</th>
            <th>{x.phoneNumber}</th>
            <th>{x.email}</th>
          </tr>))}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
