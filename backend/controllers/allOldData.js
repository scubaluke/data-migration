const connectDB = require('../connectAndQuery/connectDB');

const allOldData = async (req, res) => {
  const ConnectionString = 'postgresql://old:hehehe@localhost:5432/old';
  const queryString = 'SELECT * FROM accounts';

  try {
    const data = await connectDB(ConnectionString, queryString);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = allOldData;
