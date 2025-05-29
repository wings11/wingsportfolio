const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;

app.use(cors());

app.get('/affirmations', async (req, res) => {
  try {
    const response = await axios.get('https://www.affirmations.dev/');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`CORS proxy server is running on http://localhost:${port}`);
});
