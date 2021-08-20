import getPoolOld from '../connectDB/getPoolOld.js'

const allOldData = (req, res) => {
    const pool = getPoolOld()
    pool.query('SELECT * FROM accounts', (err, result) => {
        if (err) {
            console.log(err)
            res.status(400).send(err)
        }
        res.status(200).send(result.rows)
        pool.end()
    })
}

export default allOldData