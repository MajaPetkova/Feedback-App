import "./App.css";
import data from "./mock-data.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleAddFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = {...addFormData}
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData)
  };

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
          {contacts.map((x) => (
            <tr>
              <th>{x.fullName}</th>
              <th>{x.address}</th>
              <th>{x.phoneNumber}</th>
              <th>{x.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add a Contact</h2>
      <form >
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."    
        onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email...."
          onChange={handleAddFormChange}
        />
        <button type="submit" >
          Add
        </button>
      </form>
    </div>
  );
}

export default App;
