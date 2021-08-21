const express = require('express');

const allNewData = require('./controllers/allNewData');
const allOldData = require('./controllers/allOldData');
const report = require('./controllers/report');

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
