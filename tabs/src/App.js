import { useState, useEffect } from "react";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setJobs(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </section>
    );
  }

  return <main className="container"></main>;
}

export default App;
