const getNewData = require('../getData/getNewData.js');
const getOldData = require('../getData/getOldData.js');
const generateReport = require('../utils/generateReport');
const connectDB = require('../connectAndQuery/connectDB');

const report = async (req, res) => {
  try {
    const newConnectionString = 'postgresql://new:hahaha@localhost:5433/new';
    const oldConnectionString = 'postgresql://old:hehehe@localhost:5432/old';

    const newRecords = await connectDB(newConnectionString);
    const oldRecords = await connectDB(oldConnectionString);

    const sendReport = await generateReport(newRecords, oldRecords);
    res.status(200).send(sendReport);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = report;
