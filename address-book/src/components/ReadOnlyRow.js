import React from "react";

const ReadOnlyRow = ({x}) => {
  return (
    <tr key={x.id}>
      <th>{x.fullName}</th>
      <th>{x.address}</th>
      <th>{x.phoneNumber}</th>
      <th>{x.email}</th>
    </tr>
  );
};

export default ReadOnlyRow;
