import getNewData from '../getData/getNewData.js';
import getOldData from '../getData/getOldData.js';
import generateReport from '../utils/generateReport.js';

const report = async (req, res) => {
  const newRecords = await getNewData();
  const oldRecords = await getOldData();

  const sendReport = await generateReport(newRecords, oldRecords);
  res.status(200).send(sendReport);
};
export default report;
