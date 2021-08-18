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

            const missedAndNew = (newData, oldData) => {
                const oldIdArr = oldData.map(d => d.id)
                const newIdArr = newData.map(d => d.id)
                let missedAndAdded = []
                let missedData = []
                let addedData = []
                let holdId = []
                oldData.forEach(document => {
                    // if new data doesn't include this old document it was missed
                    if (!newIdArr.includes(document.id)) {
                        missedData.push(document)
                        missedAndAdded.push(document)
                        // not needed for this program added for code reusability
                        holdId.push(document.id)
                    }
                })

                newData.forEach(document => {
                    // if old data does not include this new document it was added and it hasn't already been added to missed and added list
                    if (!oldIdArr.includes(document.id) && !holdId.includes(document.id)) {
                        addedData.push(document)
                        holdId.push(document.id)
                    }
                })
                return {missedAndAdded, missedData, addedData}
            }
           const dataMissedAndAdded = missedAndNew(newData.rows, oldData.rows)

            res.status(200).send({total: dataMissedAndAdded.missedAndAdded.length, missed: dataMissedAndAdded.missedData.length, added: dataMissedAndAdded.addedData.length, duplicates: duplicates.length, corrupted: corruptedObjs.length, dataMissedAndAdded, corruptedObjs })
        }
            })
        } 
    })
}

export default compareData