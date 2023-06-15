import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3030/users").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
    // console.log(columns)
    // console.log(records)
  }, []);

  const deleteHandler = (id) => {
    const confirmation = window.confirm("Are you sure?");
    if (confirmation) {
      axios
        .delete("http://localhost:3030/users/" + id)
        .then((res) => {
          alert("User is removed");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container">
      <div className="text-end">
        <Link to="/create" className="btn">
          Add +
        </Link>
      </div>
      <table className="table">
        <thead className="head">
          <tr>
            {columns.map((x, i) => (
              <th key={i}>{x}</th>
            ))}
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((x, i) => (
            <tr key={i}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.email}</td>
              <td>
                <Link to={`/update/${x.id}`} className="btn success">
                  Update
                </Link>
                <button className="danger" onClick={(e) => deleteHandler(x.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
