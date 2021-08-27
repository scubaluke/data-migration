const { Client } = require('pg');
const queryDB = require('./queryDb');

const connectDB = async (connectionString, queryString) => {
  const client = new Client({
    connectionString,
  });

  let result;
  try {
    await client.connect();
    console.log('connected');
    result = await queryDB(client, queryString);
  } catch (error) {
    console.error('DB connection error', error.stack);
  }

  return result;
};

module.exports = connectDB;
