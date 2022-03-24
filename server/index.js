import express from 'express';
import cors from 'cors';
import fakeFishData from './fakeData.js';
import fetchFishData from './fetchedData.js';

const app = express();
const returnFakeData = (res) => {
  res.status(200)
     .setHeader('Content-Type', 'application/json')
     .json(fakeFishData);
}

app.get('/api/fish', cors(), (_, res) => {
  try {
    fetchFishData(res);
    // returnFakeData(res);
  } catch (error) {
    res.status(500);
    return res.send({ message: error.toString() });
  }
});

const port = 8080;

app.listen(port, () => `Server running on port ${port}`);