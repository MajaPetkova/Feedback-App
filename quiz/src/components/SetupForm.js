import { AppContext } from "../context";
import { useContext } from "react";

export const SetupForm = () => {
  const { quiz, error } = useContext(AppContext);
  return (
    <main>
      <h3>Setup Quiz</h3>
      <form className="form">
        <div className="form-input">
          <label htmlFor="number-questions">Number of questions</label>
          <input
            type="number"
            max={50}
            min={1}
            name="amount"
            id="number-questions"
            className="input"
            value={quiz.amount}
            onChange=""
          />
        </div>
        <div className="form-input">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" value={quiz.category} onChange="">
            <option value="sport">Sports</option>
            <option value="politics">Politics</option>
            <option value="history">History</option>
          </select>
        </div>
        <div className="form-input">
          <label htmlFor="difficulty">Difficulty</label>
          <select name="difficulty" id="difficulty" value={quiz.difficulty}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        {error && <p className="error"> Can't generate questions</p>}
        <button type="submit" >Start</button>
      </form>
    </main>
  );
};
