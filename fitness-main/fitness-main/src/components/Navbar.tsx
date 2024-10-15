import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Activity, BarChart2, Target, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-blue-300 to-grey-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl text-black  font-bold hover:text-blue-700 transition duration-300">
          Fitness
        </Link>
        {user ? (
          <div className="flex items-center space-x-6">
            <Link to="/dashboard" className="flex items-center hover:text-blue-700 text-black transition duration-300">
              <Activity className="mr-1" size={20} />
              Dashboard
            </Link>
            <Link to="/workout-log" className="flex items-center hover:text-blue-700 text-black transition duration-300">
              <BarChart2 className="mr-1" size={20} />
              Log Workout
            </Link>
            <Link to="/statistics" className="flex items-center hover:text-blue-700 text-black transition duration-300">
              <BarChart2 className="mr-1" size={20} />
              Statistics
            </Link>
            <Link to="/goals" className="flex items-center hover:text-blue-700 text-black transition duration-300">
              <Target className="mr-1" size={20} />
              Goals
            </Link>
            <button onClick={logout} className="flex items-center hover:text-blue-700 text-black transition duration-300">
              <LogOut className="mr-1" size={20} />
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-6">
            <Link to="/login" className="hover:text-blue-700 rounded-md  shadow-md font-bold text-black transition duration-300">Login</Link>
            <Link to="/signup" className="hover:text-blue-700 rounded-md shadow-md font-bold text-black transition duration-300">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
