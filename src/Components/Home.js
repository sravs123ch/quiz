import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold text-white text-center">
        Welcome to Travel Quiz
      </h1>
      <p className="text-white mt-2 text-lg text-center">
        Test your travel knowledge & win exciting rewards!
      </p>
      <div className="mt-8 flex flex-col items-center space-y-4">
        <Link
          to="/quiz-input"
          className="w-full max-w-md bg-white text-blue-600 py-4 rounded-lg text-center shadow-lg hover:bg-blue-100 transition duration-200 transform hover:scale-105"
        >
          <span className="font-semibold">Create a Quiz</span>
        </Link>
        <Link
          to="/quiz"
          className="w-full max-w-md bg-white text-green-600 py-4 rounded-lg text-center shadow-lg hover:bg-green-100 transition duration-200 transform hover:scale-105"
        >
          <span className="font-semibold">Play a Quiz</span>
        </Link>
        <Link
          to="/packages"
          className="w-full max-w-md bg-white text-purple-600 py-4 rounded-lg text-center shadow-lg hover:bg-purple-100 transition duration-200 transform hover:scale-105"
        >
          <span className="font-semibold">View Travel Packages</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
