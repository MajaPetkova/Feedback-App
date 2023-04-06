export const RepoList = ({ repos }) => {
  return (
    <div className="repo-list">
      <h3>Latest Repositories</h3>
      {repos.map((x) => (
        <div className="repo-item">
          <h3>{x.name}</h3>
          {/* <p>{x.description}</p> */}
        </div>
      ))}
    </div>
  );
};
