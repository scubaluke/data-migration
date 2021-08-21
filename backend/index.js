import express from 'express';

import allNewData from './controllers/allNewData.js';
import allOldData from './controllers/allOldData.js';
import report from './controllers/report.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Api running!');
});

app.get('/old', allOldData);
app.get('/new', allNewData);
app.get('/report', report);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
