import { useState, useEffect } from "react";
import { Loading } from "./components/Loading";
import { JobInfo } from "./components/JobInfo";
import { BtnContainer } from "./components/BtnContainer";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(1);


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
          <Loading />
        </div>
      </section>
    );
  }

  return (
    <main className="jobs-center">
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
      <JobInfo jobs={jobs} currentItem={currentItem}/>
    </main>
  );
}

export default App;
