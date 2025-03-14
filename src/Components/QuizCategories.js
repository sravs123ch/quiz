import React from "react";
import { useNavigate } from "react-router-dom";

const QuizCategories = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Geography" },
    { id: 2, name: "Culture" },
    { id: 3, name: "History" },
    { id: 4, name: "Sports" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-white mb-6">Quiz Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => navigate(`/quiz-static/${category.id}`)} // Navigate to the quiz based on category
          >
            <h2 className="text-xl font-bold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizCategories;
