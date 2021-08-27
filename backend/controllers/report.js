const generateReport = require('../utils/generateReport');
const connectDB = require('../connectAndQuery/connectDB');

const report = async (req, res) => {
  try {
    const newConnectionString = 'postgresql://new:hahaha@localhost:5433/new';
    const oldConnectionString = 'postgresql://old:hehehe@localhost:5432/old';
    const queryString = 'SELECT * FROM accounts';

    const newRecords = await connectDB(newConnectionString, queryString);
    const oldRecords = await connectDB(oldConnectionString, queryString);

    const sendReport = await generateReport(newRecords, oldRecords);
    res.status(200).send(sendReport);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = report;
