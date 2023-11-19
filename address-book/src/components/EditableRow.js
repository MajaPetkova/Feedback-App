import React from "react";

const EditableRow = () => {
  return (
    <tr>
      <th>
        <input
          type="text"
          required="required"
          name="fullName"
          placeholder="Enter a name..."
        />
      </th>
      <th> <input
          type="text"
          required="required"
          name="address"
          placeholder="Enter an address..."
        /></th>
      <th> <input
          type="text"
          required="required"
          name="phoneNumber"
          placeholder="Enter a phone number..."
        /></th>
      <th> <input
          type="email"
          required="required"
          name="email"
          placeholder="Enter an email..."
        /></th>
    </tr>
  );
};

export default EditableRow;
