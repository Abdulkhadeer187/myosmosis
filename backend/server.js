const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// An API endpoint to fetch data (for example, you can add more API routes here)
app.get('/api/data', (req, res) => {
  // Your API logic here
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a video schema and model
const videoSchema = new mongoose.Schema({
  id: Number,
  para: String,
  tech: String,
  url: String,
  time: String,
  date: String,
  num: String,
});

const Video = mongoose.model('Video', videoSchema);

// Create API endpoint to fetch video data
app.get('/api/videos', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
