import { createContext, useState, useEffect } from "react";

const API_ENDPOINT = "https://opentdb.com/api.php?";
let url = "";
const table = {
  sports: 21,
  history: 23,
  politics: 24,
};
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });

  const fetchQuestions = async (url) => {
    setWaiting(false);
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.results.length > 0) {
        setQuestions(data.results);
        setIsLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setError(true);
        setWaiting(true)
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  //   useEffect(() => {
  //     fetchQuestions(tempUrl);
  //   }, []);

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };
  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setWaiting(true);
    setCorrect(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;
    // const tempUrl =
    //   "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

    const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;

    fetchQuestions(url);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //   console.log(name, value)
    setQuiz({ ...quiz, [name]: value });
  };
  return (
    <AppContext.Provider
      value={{
        waiting,
        isLoading,
        questions,
        correct,
        index,
        error,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        closeModal,
        quiz,
        handleSubmit,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
