import { UserContainer } from "./UserContainer";

export const NavLinks = () => {
  return (
    <div className="list-nav">
      <ul>
        <a href="/home">
          <li>Home</li>
        </a>
        <a href="/about">
          <li>About</li>
        </a>
      </ul>
      <UserContainer />
    </div>
  );
};
