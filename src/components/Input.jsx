import React, { useState } from 'react';
import axios from 'axios';

const LogInput = () => {
  const [formData, setFormData] = useState({
    calories: '',
    workoutDuration: '',
    waterIntake: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submit the form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/data', formData);
      console.log('Response:', response.data);
      alert('Data logged successfully!');
      setFormData({
        calories: '',
        workoutDuration: '',
        waterIntake: '',
      });
    } catch (error) {
      console.error('Error posting data:', error);
      alert('Failed to log data.');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Log Your Health Data</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Calories Burned</label>
          <input
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Workout Duration (min)</label>
          <input
            type="number"
            name="workoutDuration"
            value={formData.workoutDuration}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Water Intake (L)</label>
          <input
            type="number"
            name="waterIntake"
            value={formData.waterIntake}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogInput;

