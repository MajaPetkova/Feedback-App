import { useState } from "react";

export const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "John" });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <h3>Challenge</h3>
      {user ? (
        <div>
          <p>Hello there {user.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>please login</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};
