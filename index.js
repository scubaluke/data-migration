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




app.get('/compare', (req, res) => {
    const poolOld = getPoolOld()
    poolOld.query('SELECT * FROM accounts', (errOld, oldData) => {
        if (errOld) {
            console.log(errOld)
            res.status(400).send(errOld)
            poolOld.end()
        } else {
            const poolNew = getPoolNew()
            poolNew.query('SELECT * FROM accounts', (errNew, newData) => {
                if (errNew) {
                    console.log(errNew)
                    res.status(400).send(errNew)
                    poolNew.end()
                    poolOld.end()
                }else {
                    let corruptedObjs = []
                const compareObj = (newObj, oldObj) => {
                       if (newObj.name !== oldObj.name || newObj.email !== oldObj.email || Object.keys(newObj).length !== 4 ) {
                        objCorrupted.push(newObj)
        }
                }
            // todo - find:
            // 1. Missing data 
            // 2. corrupted data 
            // 3. new records 

            // corruptedObjs: 6120
            newData.rows.forEach(el => {
                const found = oldData.rows.filter(d => d.id === el.id)
                if (found.length > 0) {
                    compareObj(el, found[0])
                }
            })
            res.status(200).send({corrupted: corruptedObjs.length, corruptedObjs})
        }
            })
        } 
    })
})



app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})