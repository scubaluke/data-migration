import express from 'express';

// controllers
import allNewData from './controllers/allNewData.js';
import allOldData from './controllers/allOldData.js';
import compareData from './controllers/compareData.js';
import generateReport from './utils/generateReport.js';

import getNewData from './getData/getNewData.js';
import getOldData from './getData/getOldData.js';

import report from './controllers/report.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Api running!');
});

app.get('/old', allOldData);
app.get('/new', allNewData);
app.get('/report', report);
app.get('/compare', compareData);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
