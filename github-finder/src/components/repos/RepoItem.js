import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

export const RepoItem = ({ repo }) => {
  const { name, description, html_url } = repo;
  return (
    <div className="repo-item">
      <div className="single-repo">
        <h3 className="repo-name">
          <a href={html_url} >
            <FaLink />
            {name}
          </a>
        </h3>
        <p className="desc">{description}</p>
      </div>
    </div>
  );
};
