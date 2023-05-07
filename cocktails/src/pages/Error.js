import {Link} from "react-router-dom";

export const Error = () =>{
    return (
        <section className="error">
          <h2>ooops! it's a dead end!</h2>
      <Link to="/" className="btn-primary">Back home</Link>
        </section>
    )
}