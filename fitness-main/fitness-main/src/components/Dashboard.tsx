import React from 'react';
import { Activity, Target, PlusCircle, BarChart2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data (replace with actual data from API)
  const recentWorkouts = [
    { id: 1, type: 'Running', duration: 30, date: '2024-03-15' },
    { id: 2, type: 'Weightlifting', duration: 45, date: '2024-03-14' },
    { id: 3, type: 'Cycling', duration: 60, date: '2024-03-13' },
  ];

  const weeklyGoal = { target: 150, current: 75 };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome, {user?.email}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Activity className="mr-2" />
            Recent Workouts
          </h2>
          <ul className="space-y-3">
            {recentWorkouts.map((workout) => (
              <li key={workout.id} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <span className="font-medium">{workout.type}</span>
                <span className="text-gray-600">{workout.duration} minutes</span>
                <span className="text-sm text-gray-500">{workout.date}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Target className="mr-2" />
            Weekly Goal Progress
          </h2>
          <div className="mb-2">
            <div className="flex justify-between mb-1">
              <span>{weeklyGoal.current} / {weeklyGoal.target} minutes</span>
              <span>{Math.round((weeklyGoal.current / weeklyGoal.target) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${(weeklyGoal.current / weeklyGoal.target) * 100}%` }}
              ></div>
            </div>
          </div>
          <p className="text-sm text-gray-600">Keep it up! You're on track to meet your weekly goal.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link to="/workout-log" className="flex-1 bg-green-500 text-white p-4 rounded-lg shadow hover:bg-green-600 transition duration-300 flex items-center justify-center">
          <PlusCircle className="mr-2" />
          Log New Workout
        </Link>
        <Link to="/statistics" className="flex-1 bg-blue-500 text-white p-4 rounded-lg shadow hover:bg-blue-600 transition duration-300 flex items-center justify-center">
          <BarChart2 className="mr-2" />
          View Statistics
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;