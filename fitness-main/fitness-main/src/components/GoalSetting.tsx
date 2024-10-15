import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface Goal {
  type: string;
  target: number;
  period: 'weekly' | 'monthly';
}

const GoalSetting: React.FC = () => {
  const { user } = useAuth();
  const [goal, setGoal] = useState<Goal>({
    type: '',
    target: 0,
    period: 'weekly',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setGoal(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to save goal
    console.log('Goal to be saved:', goal);
    // Reset form after submission
    setGoal({
      type: '',
      target: 0,
      period: 'weekly',
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Set Fitness Goal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="type" className="block mb-1">Goal Type</label>
          <select
            id="type"
            name="type"
            value={goal.type}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select a goal type</option>
            <option value="workout_minutes">Workout Minutes</option>
            <option value="calories_burned">Calories Burned</option>
            <option value="workouts_completed">Workouts Completed</option>
          </select>
        </div>
        <div>
          <label htmlFor="target" className="block mb-1">Target</label>
          <input
            type="number"
            id="target"
            name="target"
            value={goal.target}
            onChange={handleInputChange}
            required
            min="1"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="period" className="block mb-1">Period</label>
          <select
            id="period"
            name="period"
            value={goal.period}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Set Goal
        </button>
      </form>
    </div>
  );
};

export default GoalSetting;