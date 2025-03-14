import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const StaticQuiz = () => {
  const { id } = useParams(); // Get the category ID from the URL
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      category: "Geography",
      questions: [
        {
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          answer: "Paris",
        },
        {
          question: "Which river is the longest in the world?",
          options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
          answer: "Nile",
        },
      ],
    },
    {
      id: 2,
      category: "Culture",
      questions: [
        {
          question: "Which country is known for the Great Wall?",
          options: ["India", "China", "Japan", "Korea"],
          answer: "China",
        },
        {
          question: "What is the traditional dress of Scotland?",
          options: ["Kimono", "Kilt", "Sari", "Toga"],
          answer: "Kilt",
        },
      ],
    },
    {
      id: 3,
      category: "History",
      questions: [
        {
          question: "Who was the first President of the United States?",
          options: [
            "Abraham Lincoln",
            "George Washington",
            "Thomas Jefferson",
            "John Adams",
          ],
          answer: "George Washington",
        },
        {
          question: "In which year did World War II end?",
          options: ["1945", "1944", "1939", "1950"],
          answer: "1945",
        },
      ],
    },
    {
      id: 4,
      category: "Sports",
      questions: [
        {
          question: "Which sport is known as 'the beautiful game'?",
          options: ["Basketball", "Cricket", "Soccer", "Tennis"],
          answer: "Soccer",
        },
        {
          question: "How many players are there in a rugby team?",
          options: ["11", "13", "15", "7"],
          answer: "15",
        },
      ],
    },
  ];

  // Find the category based on the ID
  const selectedCategory = questions.find((cat) => cat.id === parseInt(id));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    // Check if the selected option is correct
    const isCorrect =
      selectedCategory.questions[currentQuestionIndex].options[index] ===
      selectedCategory.questions[currentQuestionIndex].answer;
    setIsAnswerCorrect(isCorrect);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerCorrect(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleFinishQuiz = () => {
    // Logic to finish the quiz (e.g., navigate to results)
    navigate("/results"); // Adjust as needed for results
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-white mb-6">
        {selectedCategory ? selectedCategory.category : "Category Not Found"}
      </h1>
      {selectedCategory ? (
        currentQuestionIndex < selectedCategory.questions.length ? (
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-4">
            <h2 className="text-xl font-bold mb-4">
              {selectedCategory.questions[currentQuestionIndex].question}
            </h2>
            <div className="flex flex-col">
              {selectedCategory.questions[currentQuestionIndex].options.map(
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
                    currentQuestionIndex < selectedCategory.questions.length - 1
                      ? handleNextQuestion
                      : handleFinishQuiz
                  }
                  className="bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition duration-200"
                >
                  {currentQuestionIndex < selectedCategory.questions.length - 1
                    ? "Next Question"
                    : "Finish Quiz"}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-4">
            <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-lg">Thank you for participating!</p>
            <button
              onClick={handleFinishQuiz}
              className="bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition duration-200 w-full"
            >
              Finish Quiz
            </button>
          </div>
        )
      ) : (
        <p className="text-white">No questions available for this category.</p>
      )}
    </div>
  );
};

export default StaticQuiz;
