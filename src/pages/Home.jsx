import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold">Welcome to Health Tracker</h1>
    <p className="mt-4 text-lg">Track your health and achieve your goals effortlessly!</p>
    <div className="mt-6">
      <Link to="/login" className="px-6 py-3 bg-blue-500 text-white rounded">Get Started</Link>
    </div>
  </div>
);

export default Home;
