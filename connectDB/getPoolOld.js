import PG from 'pg';

const Pool = PG.Pool;

const getPoolOld = () => {
    const connectionString = 'postgresql://old:hehehe@localhost:5432/old'

    const poolOld = new Pool({
        connectionString,
        })

    poolOld.connect()
    return poolOld
}

export default getPoolOld