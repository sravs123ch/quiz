import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import QuizInput from "./Components/QuizInput";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import Results from "./Components/Results";
import Packages from "./Components/Packages";
import RewardsDashboard from "./Components/RewardsDashboard";
import QuizCategories from "./Components/QuizCategories";
import Leaderboard from "./Components/Leaderboard";
import StaticQuiz from "./Components/StaticQuiz";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Header Section */}
        <header className="bg-blue-600 p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Travel Quiz App</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-yellow-300 transition duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quiz-categories"
                    className="text-white hover:text-yellow-300 transition duration-200"
                  >
                    Quiz Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/leaderboard"
                    className="text-white hover:text-yellow-300 transition duration-200"
                  >
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rewards"
                    className="text-white hover:text-yellow-300 transition duration-200"
                  >
                    Rewards Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quiz"
                    className="text-white hover:text-yellow-300 transition duration-200"
                  >
                   Quiz
                  </Link>
                </li>
                <li>
                  <Link
                    to="/packages"
                    className="text-white hover:text-yellow-300 transition duration-200"
                  >
                  Travel Packages
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz-input" element={<QuizInput />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results score={0} />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/quiz-categories" element={<QuizCategories />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/rewards" element={<RewardsDashboard />} />
          <Route path="/quiz-static/:id" element={<StaticQuiz />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
