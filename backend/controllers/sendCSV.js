const write_csv = require('../helpers/write_csv')
const getReport = require('../reportGenerators/dataStructure')
const getRecords = require('../utils/getRecords')

async function sendCSV(req, res) {
    try {
        console.log('running sencCSV');
        const records = await getRecords()

        const report = getReport(records)

        const csv = await write_csv(report)
        console.log('csv');
        console.log(csv);
        // res.attachment('report.csv').send(csv)
    } catch (error) {
        res.status(500).send(error);
        console.error(error);
    }
};

module.exports = sendCSV