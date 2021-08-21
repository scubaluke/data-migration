const { Client } = require('pg');

const getOldData = async () => {
  const connectionString = 'postgresql://old:hehehe@localhost:5432/old';

  const client = new Client({
    connectionString,
  });

  client
    .connect()
    .then(() => console.log('Previous DB connected'))
    .catch((err) => console.error('Previous DB connection error', err.stack));

  let data = {};
  try {
    data = await client.query('SELECT * FROM accounts');
    return data.rows;
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};
module.exports = getOldData;
