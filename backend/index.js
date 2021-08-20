import express from 'express';

// controllers
import allNewData from './controllers/allNewData.js';
import allOldData from './controllers/allOldData.js';
import compareData from './controllers/compareData.js';
import getOldData from './getData/getOldData.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Api running!');
});

app.get('/old', async (req, res) => {
  const data = await getOldData();
  res.send(data);
});
app.get('/new', allNewData);

app.get('/compare', compareData);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
