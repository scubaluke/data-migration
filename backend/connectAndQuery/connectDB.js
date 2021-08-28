const { Client } = require('pg');
const queryDB = require('./queryDb');

const connectDB = async (connectionString, queryString) => {
  const client = new Client({
    connectionString,
  });

  try {
    await client.connect();
    console.log('DB connected');
  } catch (error) {
    console.error('DB connection error', error.stack);
  }

  return queryDB(client, queryString);
};

module.exports = connectDB;
