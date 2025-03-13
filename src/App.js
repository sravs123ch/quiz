import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import QuizInput from "./Components/QuizInput";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import Results from "./Components/Results";
import Packages from "./Components/Packages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-input" element={<QuizInput />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results score={0} />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </Router>
  );
};

export default App;
