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
    logi,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;


  useEffect(() => {
    getUser(params.login);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
  <div>{user.login}</div>
    </>)
};
