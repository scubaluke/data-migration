const getRecords = require('../utils/getRecords')
const timeFunction = require('../utils/timeFunction');

const report = async (req, res) => {
    const method = req.params.method.replace(':', '')
    const callback = require(`../reportGenerators/${method}`)

    try {
        const callbackParams = await getRecords()

        const report = timeFunction({ callback, callbackParams })
        console.log(report.runTime);
        res.status(200).send(report);
    } catch (error) {
        res.status(500).send(error);
        console.error(error);
    }
};
module.exports = report;
