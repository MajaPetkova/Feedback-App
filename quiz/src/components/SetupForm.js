import { AppContext } from "../context";
import { useContext } from "react";

export const SetupForm = () => {
  const { quiz, error, handleSubmit, handleChange } = useContext(AppContext);
  return (
    <main>
      <h3>Setup Quiz</h3>
      <form className="form" onSubmit={handleSubmit}>
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
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" value={quiz.category} onChange={handleChange}>
            <option value="sport">Sports</option>
            <option value="politics">Politics</option>
            <option value="history">History</option>
          </select>
        </div>
        <div className="form-input">
          <label htmlFor="difficulty">Difficulty</label>
          <select name="difficulty" id="difficulty" value={quiz.difficulty} onChange={handleChange}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        {error && (<p className="error"> Can't generate questions. Please try with different options.</p>)}
        <button type="submit" onClick={handleSubmit}>Start</button>
      </form>
    </main>
  );
};
