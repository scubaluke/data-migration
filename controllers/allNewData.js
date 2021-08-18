import getPoolNew from '../connectDB/getPoolNew.js'

const allNewData = (req, res) => {
    const pool = getPoolNew()
    pool.query('SELECT * FROM accounts', (err, result) => {
        if (err) {
            console.log(err)
            res.status(400).send(err)
        }
        res.status(200).send(result.rows)
        pool.end()
    })
}

export default allNewData