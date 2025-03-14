import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };
  const navigate = useNavigate();
  return (
    <div className="p-4 min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-white mb-4">Quiz Results</h2>
      <p className="text-white text-lg">
        Your Score: {score} / {total}
      </p>
      <button
      onClick={() => navigate("/quiz")}
        className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition duration-200"
      >
        Play Again
      </button>
    </div>
  );
};

export default Results;
