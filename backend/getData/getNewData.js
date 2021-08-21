import PG from 'pg';

const { Client } = PG;

const getNewData = async () => {
  const connectionString = 'postgresql://new:hahaha@localhost:5433/new';

  const client = new Client({
    connectionString,
  });

  client
    .connect()
    .then(() => console.log('New DB connected'))
    .catch((err) => console.error('New DB connection error', err.stack));

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

export default getNewData;
