import { useContext } from "react";
import { AppContext } from "../context";
import Spinner from "../assets/loading.png";

export const Stories = () => {
  const { isLoading, hits, removeStory } = useContext(AppContext);

  if (isLoading) {
    return (
      <div className="loading">
        <img src={Spinner} alt="Loading..." />
      </div>
    );
  }

  return <section className="stories-container">
        {hits.map((x)=>{
        const{title,objectID, url, num_comments, points, author } = x;
    return <article className="story" key={objectID} >
      <h4>{title}</h4>
      <p className="info">{points} points by <span>{author} | </span>{num_comments} comments</p>
      <a href={url} className="read_link" target="_blank" rel="noreferrer">read more</a>
      <button className="remove-btn" onClick={()=> removeStory(objectID)}>remove</button>
    </article>
})}
  </section>
};
