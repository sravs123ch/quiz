// src/Components/RewardsDashboard.js
import React, { useState } from "react";

const RewardsDashboard = () => {
  // Sample user data
  const [userPoints, setUserPoints] = useState(150); // Example points
  const [redeemedRewards, setRedeemedRewards] = useState([]);

  // Sample rewards data
  const rewards = [
    {
      id: 1,
      name: "10% Off Travel Package",
      cost: 100,
    },
    {
      id: 2,
      name: "Free Travel Quiz Entry",
      cost: 50,
    },
    {
      id: 3,
      name: "Upgrade to Premium Quiz",
      cost: 200,
    },
  ];

  const handleRedeem = (reward) => {
    if (userPoints >= reward.cost) {
      setUserPoints(userPoints - reward.cost);
      setRedeemedRewards([...redeemedRewards, reward]);
      alert(`You have redeemed: ${reward.name}`);
    } else {
      alert("Not enough points to redeem this reward.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-white mb-6">Rewards Dashboard</h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6">
        <h2 className="text-2xl font-bold mb-4">Your Points: {userPoints}</h2>
        <h3 className="text-xl font-semibold mb-2">Available Rewards:</h3>
        <ul className="list-disc pl-5">
          {rewards.map((reward) => (
            <li
              key={reward.id}
              className="mb-2 flex justify-between items-center"
            >
              <span className="font-bold">{reward.name}</span> - {reward.cost}{" "}
              points
              <button
                onClick={() => handleRedeem(reward)}
                className="bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-700 transition duration-200"
              >
                Redeem
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Redeemed Rewards</h2>
        {redeemedRewards.length > 0 ? (
          <ul className="list-disc pl-5">
            {redeemedRewards.map((reward, index) => (
              <li key={index} className="mb-2">
                {reward.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No rewards redeemed yet.</p>
        )}
      </div>
    </div>
  );
};

export default RewardsDashboard;
