import { useFetchPerson } from "./useFetchPerson";

const url = "https://api.github.com/users/QuincyLarson";

const FetchDataComponent = () => {
  const { isLoading, isError, user } = useFetchPerson(url);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>There was an error...</p>;
  }
  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img src={avatar_url} alt="image" style={{ width: "100px",height:"100px", borderRadius: "20px" }}/>
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <h2>{bio}</h2>
    </div>
  );
};
export default FetchDataComponent;
