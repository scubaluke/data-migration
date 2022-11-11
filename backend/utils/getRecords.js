const connectDB = require('../connectAndQuery/connectDB');

async function getRecords() {
    //! use dotenv file
    const newConnectionString = 'postgresql://new:hahaha@localhost:5433/new';
    const oldConnectionString = 'postgresql://old:hehehe@localhost:5432/old';
    const queryString = 'SELECT * FROM accounts';

    const newRecords = await connectDB(newConnectionString, queryString);
    const oldRecords = await connectDB(oldConnectionString, queryString);
    return { oldRecords, newRecords }
}

module.exports = getRecords