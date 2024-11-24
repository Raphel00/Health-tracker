import React from 'react';

const Dashboard = () => (
  <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-4 bg-white shadow rounded">
        <h2 className="text-lg font-bold">Calories Consumed</h2>
        <p>1500 kcal</p>
      </div>
      <div className="p-4 bg-white shadow rounded">
        <h2 className="text-lg font-bold">Workout Duration</h2>
        <p>45 minutes</p>
      </div>
      <div className="p-4 bg-white shadow rounded">
        <h2 className="text-lg font-bold">Water Intake</h2>
        <p>2 liters</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
