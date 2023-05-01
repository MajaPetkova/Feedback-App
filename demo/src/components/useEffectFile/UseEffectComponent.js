import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

export const UseEffectComponent = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false)

  const sayHello = () => {
    console.log("hello");
    // infinite loop //
    // setValue(value +1)
  };
  sayHello();

  const getUsers = async () => {
    try {
      const res = await fetch(url);

      if(res.ok !== true){
        setIsError(true)
        setIsLoading(false)
        return
      }
      const data = await res.json();
      setUsers(data);
      // console.log(data)
    } catch (err) {
      setIsError(true)
      console.log(err);
    }
    setIsLoading(false)
  };

  useEffect(() => {
    getUsers();
    console.log("Hello from useEffect");
  }, []);

  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>There was an error..</h2>
  }
  return (
    <div>
      <h2>Fetch data Example</h2>
      <div className="fetchData">
        {users.map((x) => {
          const {id, avatar_url, login} = x;
          return (
            <article key={id}>
              <img src={avatar_url} alt="img" />
              <h3>{login}</h3>
            </article>
          );
        })}
      </div>
    </div>
  );
};
