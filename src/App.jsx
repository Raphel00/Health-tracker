import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './components/Dashboard';
import Trends from './components/Updates';
import LogInput from './components/Input'; // Import LogInput

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/trends" element={<Trends />} />
      <Route path="/log" element={<LogInput />} /> {/* Add route for LogInput */}
    </Routes>
  </div>
);

export default App;


