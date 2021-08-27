const queryDB = async (client, queryString) => {
  try {
    const { rows } = await client.query(queryString);
    return rows;
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

module.exports = queryDB;
