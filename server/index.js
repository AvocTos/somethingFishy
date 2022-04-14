import express from 'express';
import cors from 'cors';
import fakeFishData from './fakeData.js';
import fetchFishData from './fetchedData.js';
import path from 'path';
import { dirname } from 'path';

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

app.get('/', (_, res) => {
  const __dirname = path.resolve();
  const root = path.join(__dirname, '..', 'client', 'build');
  app.use(express.static(root));
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => `Server running on port ${port}`);