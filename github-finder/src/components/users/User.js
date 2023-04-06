import { useContext, useEffect } from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { Spinner } from "../layout/Spinner";
import { Link } from "react-router-dom";
import { GithubContext } from "../../context/github/GithubContext";
import { useParams } from "react-router-dom";

export const User = () => {
  const { getUser, user, loading } = useContext(GithubContext);
  const params = useParams();

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    getUser(params.login);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="user-card">
        <div >
          <Link to="/" className="back">
            Back to search
          </Link>
        </div>
        <div className="user-info">
          <div>
            <img className="image" src={avatar_url} alt="profile image" />
            <p className="nickname">{login}</p>
          <div className="location-info">
            {location && <p>Location: {location}</p>}
            {blog && <p>Blog: {blog}</p>}
            </div>
          </div>
          <div className="user-profile">
            <h2 className="name">{name} <span>{type}</span></h2>
            <p>{bio}</p>
            <div className="visit">
            <a href={html_url}  target='_blank' rel="noreferrer" >Visit Github Profile</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
