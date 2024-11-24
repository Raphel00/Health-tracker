import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Dummy data (replace with database later)
let healthData = [];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Health Tracker Backend!');
});

// Fetch all health data
app.get('/api/data', (req, res) => {
  res.json(healthData);
});

// Add health data
app.post('/api/data', (req, res) => {
  const newData = req.body;
  healthData.push(newData);
  res.status(201).json({ message: 'Data added successfully', newData });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
