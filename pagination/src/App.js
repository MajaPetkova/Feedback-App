import { useState, useEffect } from "react";
import { UseFetch } from "./UseFetch";
import { Follower } from "./components/Follower";

function App() {
  const { loading, data } = UseFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) {
      return;
    }
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0 ) {
    prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  return (
    <main>
      <div className="app">
        <h2>{loading ? "Loading..." : "Pagination"} </h2>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((x) => {
            return <Follower key={x.id} {...x} />;
          })}
        </div>

        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  className={`pgn ${index === page ? "active" : ""}`}
                  key={index}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
