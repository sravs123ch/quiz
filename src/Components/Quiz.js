import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if location.state is available
  const { title, questions } = location.state || {
    title: "Quiz",
    questions: JSON.parse(localStorage.getItem("quizQuestions")) || [],
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    // Check if the selected option is correct (assuming the last option is the correct one)
    const isCorrect =
      index === questions[currentQuestionIndex].options.length - 1;
    setIsAnswerCorrect(isCorrect);
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerCorrect(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleFinishQuiz = () => {
    // Logic to finish the quiz (e.g., navigate to results)
    navigate("/results", { state: { score, total: questions.length } });
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerCorrect(null);
    setScore(0);
    setShowResults(false);
  };

  // Redirect to QuizInput if no questions are available
  if (questions.length === 0) {
    return (
      <div className="p-4 min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          No Questions Available
        </h2>
        <p className="text-white">Please create a quiz first.</p>
        <button
          onClick={() => navigate("/quiz-input")}
          className="bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition duration-200"
        >
          Go to Create Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-white mb-6">Travel Quiz</h1>

      {showResults ? (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
          <p className="text-lg">
            You answered {score} out of {questions.length} questions.
          </p>
          <button
            className="bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition duration-200 w-full"
            onClick={handleRestart}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">
            {questions[currentQuestionIndex].question}
          </h2>
          <div className="flex flex-col">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`bg-blue-500 text-white py-2 rounded mb-2 hover:bg-blue-600 transition duration-200 ${
                  selectedOption === index
                    ? isAnswerCorrect
                      ? "bg-green-600"
                      : "bg-red-600"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
                onClick={() => handleOptionSelect(index)}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption !== null && (
            <div className="mt-4">
              {isAnswerCorrect !== null && (
                <p
                  className={`text-lg font-semibold ${
                    isAnswerCorrect ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isAnswerCorrect ? "Correct!" : "Wrong answer!"}
                </p>
              )}
              <button
                onClick={
                  currentQuestionIndex < questions.length - 1
                    ? handleNextQuestion
                    : handleFinishQuiz
                }
                className="bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition duration-200"
              >
                {currentQuestionIndex < questions.length - 1
                  ? "Next Question"
                  : "Finish Quiz"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
