import { Link } from "react-router-dom";

export const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    
    <div className="card">
      <div className="avatar">
        <img src={avatar_url} alt="Profile" />
      </div>
      <div className="card-login">
        <h2>{login}</h2>
        <Link className="link-profile" to={`/user/${login}`}>
          Visit Profile
        </Link>
      </div>
    </div>
  );
};
