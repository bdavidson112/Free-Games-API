const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

const API_BASE_URL = 'https://www.gamerpower.com/api';

app.get('/api/:endpoint', async (req, res) => {
  try {
    const { endpoint } = req.params;
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));