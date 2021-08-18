import PG from 'pg';

const Pool = PG.Pool;

const getPoolNew = () => {
    const connectionString = 'postgresql://new:hahaha@localhost:5433/new'

    const poolNew = new Pool({
        connectionString,
        })

    poolNew.connect()
    return poolNew
}

export default getPoolNew