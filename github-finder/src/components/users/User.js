import { useContext, useEffect } from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { Spinner } from "../layout/Spinner";
import { Link } from "react-router-dom";
import { GithubContext } from "../../context/github/GithubContext";
import { useParams } from "react-router-dom";
import { RepoList } from "../repos/RepoList";

export const User = () => {
  const { getUser, user, loading, getUserRepos, repos } = useContext(GithubContext);
  const params = useParams();

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login)
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="user-card">
        <div>
          <Link to="/" className="back">
            Back to search
          </Link>
        </div>
        <div className="user-info">
          <div>
            <img className="image" src={avatar_url} alt="profile image" />
            <p className="nickname">{login}</p>
          </div>
          <div>
            <div className="user-profile">
              <h2 className="name">
                {name} <span>{type}</span>
              </h2>
              <p>{bio}</p>
              <div className="visit">
                <a href={html_url} target="_blank" rel="noreferrer">
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="location-info">
              {location && (
                <div className="location-place">
                  <p>Location: {location}</p>
                </div>
              )}
              {blog && (
                <div className="blog">
                  <a href={`http://${blog}`} target="_blank" rel="noreferrer">
                    Website: {blog}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="stat">
          <div className="blog-box">
            <div>
            <p>Followers </p>
            <h2>{followers}</h2>
            </div>
            <div className="icon">
              <FaUsers />
            </div>
          </div>
          <div className="blog-box">
            <div>
            <p>Following </p>
            <h2>{following}</h2>
            </div>
            <div className="icon">
              <FaUserFriends />
            </div>
          </div>
          <div className="blog-box">
            <div>
            <p>Public Repos </p>
            <h2>{public_repos}</h2>
            </div>
            <div className="icon">
              <FaCodepen />
            </div>
          </div>
          <div className="blog-box">
            <div>
              <p>Public Gists </p>
              <h2>{public_gists}</h2>
            </div>
            <div className="icon">
              <FaStore />
            </div>
          </div>
        </div>
      <RepoList repos={repos}/>
      </div>
    </>
  );
};
