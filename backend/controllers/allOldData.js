const getOldData = require('../getData/getOldData.js');

const allOldData = async (req, res) => {
  const data = await getOldData();
  res.status(200).send(data);
};

module.exports = allOldData;
