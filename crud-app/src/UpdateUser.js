import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateUser = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3030/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3030/users/" + id, data)
      .then((res) => {
        alert("Data updated successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <button className="btn">Update</button>
      </form>
    </div>
  );
};
