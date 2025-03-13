import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizInput = () => {
  const [title, setTitle] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentOptions, setCurrentOptions] = useState(["", "", "", ""]);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const handleQuestionChange = (value) => {
    setCurrentQuestion(value);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...currentOptions];
    newOptions[index] = value;
    setCurrentOptions(newOptions);
  };

  const handleAddQuestion = () => {
    if (
      currentQuestion.trim() &&
      currentOptions.every((option) => option.trim())
    ) {
      setQuestions([
        ...questions,
        { question: currentQuestion, options: currentOptions },
      ]);
      // Reset current question and options for the next input
      setCurrentQuestion("");
      setCurrentOptions(["", "", "", ""]);
    } else {
      alert("Please fill in the question and all options.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save questions to local storage
    localStorage.setItem("quizQuestions", JSON.stringify(questions));
    // Navigate to the Quiz screen with the quiz data
    navigate("/quiz", {
      state: {
        title,
        questions: [
          ...questions,
          { question: currentQuestion, options: currentOptions },
        ],
      },
    });
  };

  return (
    <div className="p-4 min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-white mb-6">Create a Quiz</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Question"
          value={currentQuestion}
          onChange={(e) => handleQuestionChange(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {currentOptions.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
        <button
          type="button"
          onClick={handleAddQuestion}
          className="bg-blue-600 text-white py-2 rounded mb-4 w-full hover:bg-blue-700 transition duration-200"
        >
          Add Question
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded w-full hover:bg-blue-700 transition duration-200"
        >
          Submit Quiz
        </button>
      </form>
    </div>
  );
};

export default QuizInput;
