import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Health Tracker</h1>
      <div>
        <Link to="/" className="px-4 py-2">Home</Link>
        {user ? (
          <>
            <Link to="/dashboard" className="px-4 py-2">Dashboard</Link>
            <Link to="/trends" className="px-4 py-2">Trends</Link>
            <Link to="/log" className="px-4 py-2">Log Data</Link> {/* Add Log Data link */}
            <button onClick={logout} className="ml-4 px-4 py-2 bg-red-500 rounded">Logout</button>
          </>
        ) : (
          <Link to="/login" className="px-4 py-2 bg-green-500 rounded">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
