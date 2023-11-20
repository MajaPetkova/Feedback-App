import React from "react";

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
      <th>
        <input
          type="text"
          required="required"
          name="fullName"
          placeholder="Enter a name..."
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        />
      </th>
      <th> <input
          type="text"
          required="required"
          name="address"
          placeholder="Enter an address..."
          value={editFormData.address}
          onChange={handleEditFormChange}
        /></th>
      <th> <input
          type="text"
          required="required"
          name="phoneNumber"
          placeholder="Enter a phone number..."
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        /></th>
      <th> <input
          type="email"
          required="required"
          name="email"
          placeholder="Enter an email..."
          value={editFormData.email}
          onChange={handleEditFormChange}
        /></th>
        <th>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </th>
    </tr>
  );
};

export default EditableRow;
