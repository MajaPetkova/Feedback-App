import React from "react";

const ReadOnlyRow = ({x, handleEditClick}) => {
  return (
    <tr key={x.id}>
      <th>{x.fullName}</th>
      <th>{x.address}</th>
      <th>{x.phoneNumber}</th>
      <th>{x.email}</th>
      <th>
        <button type="button" onClick={(e)=>handleEditClick(e, x)}>Edit</button>
        <button type="button">Delete</button>
      </th>
    </tr>
  );
};

export default ReadOnlyRow;
