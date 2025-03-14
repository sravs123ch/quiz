import React from "react";

const Leaderboard = () => {
  const users = [
    { name: "Alice", score: 150 },
    { name: "Bob", score: 120 },
    { name: "Charlie", score: 100 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-white mb-6">Leaderboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Top Users</h2>
        <ul className="list-disc pl-5">
          {users.map((user, index) => (
            <li key={index} className="mb-2">
              {user.name} - {user.score} points
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
