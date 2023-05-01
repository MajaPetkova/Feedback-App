import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

export const UseEffectComponent = () => {
  const [users, setUsers] = useState([]);

  const sayHello = () => {
    console.log("hello");
    // infinite loop //
    // setValue(value +1)
  };
  sayHello();

  const getUsers = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
      // console.log(data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
    console.log("Hello from useEffect");
  }, []);

  return (
    <div>
      <h2>Fetch data Example</h2>
      <div className="fetchData">
        {users.map((x) => {
          return (
            <article key={x.id}>
              <img src={x.avatar_url} alt="img" />
              <h3>{x.login}</h3>
            </article>
          );
        })}
      </div>
    </div>
  );
};
