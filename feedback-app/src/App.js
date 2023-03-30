
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FeedbackList } from "./components/FeedbackList";
import { Header } from "./components/Header";
// import { FeedbackData } from "./data/FeedbackData";
import { FeedbackStats } from "./components/FeedbackStats";
import { FeedbackForm } from "./components/FeedbackForm";
import { About } from "./pages/About";
import { AboutIconLink } from "./components/AboutIconLink";

import { FeedbackProvider } from "./context/FeedbackContext";

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats 
                  // feedback={feedback} 
                  />
                  <FeedbackList
                    // feedback={feedback}
                    // closeHandler={deleteFeedback}
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
