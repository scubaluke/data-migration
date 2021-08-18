import getPoolOld from '../connectDB/getPoolOld.js'
import getPoolNew from '../connectDB/getPoolNew.js'

import { corruptedObjs } from '../utils/compareObj.js'
import findDuplicates from '../utils/findDuplicates.js'
import findCorruptedData from '../utils/findCorruptedData.js'

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
            // 3. new records 

            // done 
            // found missing data
            // found duplicates

            // corruptedObjs: 6120
            findCorruptedData(newData.rows, oldData.rows)
            const duplicates = findDuplicates(newData.rows)

            res.status(200).send({duplicates: duplicates.length, corrupted: corruptedObjs.length, corruptedObjs  })


        }
            })
        } 
    })
}

export default compareData