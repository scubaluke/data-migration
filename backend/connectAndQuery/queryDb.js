const queryDB = async (client) => {
  try {
    const { rows } = await client.query('SELECT * FROM accounts');
    return rows;
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

module.exports = queryDB;
