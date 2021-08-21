const getNewData = require('../getData/getNewData.js');
const getOldData = require('../getData/getOldData.js');
const generateReport = require('../utils/generateReport');

const report = async (req, res) => {
  try {
    const newRecords = await getNewData();
    const oldRecords = await getOldData();

    const sendReport = await generateReport(newRecords, oldRecords);
    res.status(200).send(sendReport);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = report;
