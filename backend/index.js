const express = require('express');

const allNewData = require('./controllers/allNewData');
const allOldData = require('./controllers/allOldData');
const sendReport = require('./routes/sendReport');
const sendCSV = require('./controllers/sendCSV')

const app = express();
const PORT = process.env.PORT || 5004;
app.use(express.json());

app.use('/report', sendReport);
app.use('/data', sendCSV);


app.get('/old', allOldData);
app.get('/new', allNewData);


app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
