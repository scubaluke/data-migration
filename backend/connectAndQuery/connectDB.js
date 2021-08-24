const { Client } = require('pg');
const queryDB = require('./queryDb');

const connectDB = async (connectionString) => {
  const client = new Client({
    connectionString,
  });

  client
    .connect()
    .then(() => console.log('DB connected'))
    .catch((err) => console.error('DB connection error', err.stack));

  return queryDB(client);
};
module.exports = connectDB;
