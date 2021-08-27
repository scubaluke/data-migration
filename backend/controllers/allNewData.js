const connectDB = require('../connectAndQuery/connectDB');

const allNewData = async (req, res) => {
  const ConnectionString = 'postgresql://new:hahaha@localhost:5433/new';
  const queryString = 'SELECT * FROM accounts';

  try {
    const data = await connectDB(ConnectionString, queryString);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = allNewData;
