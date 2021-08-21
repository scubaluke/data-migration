const getNewData = require('../getData/getNewData.js');

const allNewData = async (req, res) => {
  const data = await getNewData();
  res.status(200).send(data);
};

module.exports = allNewData;
