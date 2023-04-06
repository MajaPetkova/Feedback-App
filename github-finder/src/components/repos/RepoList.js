import { RepoItem } from "./RepoItem";

export const RepoList = ({ repos }) => {
  return (
    <div className="repo-list">
      <h3 className="list-title">Latest Repositories</h3>
      {repos.map((x) => (
        // <div className="repo-item">
        <RepoItem  key={x.id} repo={x}/>
        // </div>
      ))}
    </div>
  );
};
