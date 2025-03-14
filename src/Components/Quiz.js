import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();

  const staticQuestions = [
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      answer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Au", "Pb", "Fe"],
      answer: "Au",
    },
    {
      question: "Which continent is the Sahara Desert located in?",
      options: ["Asia", "Africa", "Australia", "South America"],
      answer: "Africa",
    },
    {
      question: "What is the capital city of Japan?",
      options: ["Beijing", "Seoul", "Bangkok", "Tokyo"],
      answer: "Tokyo",
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      answer: "Carbon Dioxide",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
      answer: "Leonardo da Vinci",
    },
    {
      question: "What is the smallest unit of life?",
      options: ["Organ", "Tissue", "Cell", "Atom"],
      answer: "Cell",
    },
    {
      question: "Which ocean is the largest in the world?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answer: "Pacific",
    },
    {
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      answer: "7",
    },
  ];
  

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    // Check if the selected option is correct
    const isCorrect =
      staticQuestions[currentQuestionIndex].options[index] ===
      staticQuestions[currentQuestionIndex].answer;
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
    navigate("/results", { state: { score, total: staticQuestions.length } });
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerCorrect(null);
    setScore(0);
    setShowResults(false);
  };

  // Redirect to QuizInput if no questions are available
  if (staticQuestions.length === 0) {
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
            You answered {score} out of {staticQuestions.length} questions.
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
            {staticQuestions[currentQuestionIndex].question}
          </h2>
          <div className="flex flex-col">
            {staticQuestions[currentQuestionIndex].options.map(
              (option, index) => (
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
              )
            )}
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
                  currentQuestionIndex < staticQuestions.length - 1
                    ? handleNextQuestion
                    : handleFinishQuiz
                }
                className="bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition duration-200"
              >
                {currentQuestionIndex < staticQuestions.length - 1
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
