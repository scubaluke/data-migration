const { Pool } = require('pg')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000

const getPoolOld = () => {
    const connectionString = 'postgresql://old:hehehe@localhost:5432/old'

    const poolOld = new Pool({
        connectionString,
        })

    poolOld.connect()
    return poolOld
}

const getPoolNew = () => {
    const connectionString = 'postgresql://new:hahaha@localhost:5433/new'

    const poolNew = new Pool({
        connectionString,
        })

    poolNew.connect()
    return poolNew
}

app.get('/', (req, res) => {
  res.send('Api running!')
})

app.get('/old', (req, res) => {
    const pool = getPoolOld()
    pool.query('SELECT * FROM accounts', (err, result) => {
        if (err) {
            console.log(err)
            res.status(400).send(err)
        }
        res.status(200).send(result.rows)
        pool.end()
    })
})

app.get('/new', (req, res) => {
    const pool = getPoolNew()
    pool.query('SELECT * FROM accounts', (err, result) => {
        if (err) {
            console.log(err)
            res.status(400).send(err)
        }
        res.status(200).send(result.rows)
        pool.end()
    })
})
// todo - find:
// 1. Missing data 
// 2. corrupted data 
// 3. new records 



app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})