import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Trends = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data on component mount or when new data is added
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:5000/api/data');
      console.log('Fetched data:', response.data);
      setData(response.data);  // Update state with the latest data
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // This will run once when the component mounts

  // Prepare chart data
  const chartData = {
    labels: data.map(item => item.date), // X-axis labels
    datasets: [
      {
        label: 'Calories Burned',
        data: data.map(item => item.calories), // Y-axis data for calories
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
      {
        label: 'Workout Duration (minutes)',
        data: data.map(item => item.workoutDuration), // Y-axis data for workout duration
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        tension: 0.1,
      },
      {
        label: 'Water Intake (liters)',
        data: data.map(item => item.waterIntake), // Y-axis data for water intake
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        tension: 0.1,
      },
    ],
  };

  // Add new data (e.g., from the form submission)
  const handleNewData = async (newData) => {
    try {
      await axios.post('http://localhost:5000/api/data', newData); // Post new data
      fetchData();  // Re-fetch the data to update the chart
    } catch (error) {
      console.error('Error posting new data:', error);
    }
  };

  return (
    <div className="chart-container">
      <h2>Trends</h2>
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <Line data={chartData} /> {/* Display the chart */}
          {/* Add a form or some other UI to allow users to input new data */}
          <button
            onClick={() => handleNewData({ date: '2024-11-25', calories:50, workoutDuration: 45, waterIntake: 2.5 })}
          >
            Add New Data
          </button>
        </>
      )}
    </div>
  );
};

export default Trends;


