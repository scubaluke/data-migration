import getPoolOld from '../connectDB/getPoolOld.js'
import getPoolNew from '../connectDB/getPoolNew.js'

import { corruptedObjs, compareObj } from '../utils/compareObj.js'


const compareData = (req, res) => {
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
}

export default compareData