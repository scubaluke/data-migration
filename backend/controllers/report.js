import getNewData from '../getData/getNewData.js';
import getOldData from '../getData/getOldData.js';
import generateReport from '../utils/generateReport.js';

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
export default report;
