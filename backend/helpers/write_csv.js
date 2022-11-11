// const createCsvWriter = require('csv-writer').createObjectCsvWriter
// const dayjs = require('dayjs')

// const get_header = (records) => Object.keys(records[0]).map((key) => ({ id: key, title: key }))

// async function write_csv(records, { name = 'results', header = get_header(records) } = {}) {
//     const csvWriter = createCsvWriter({
//         path: `${name}-${dayjs().format('MM.DD.YYYY.HH.mm')}.csv`,
//         header,
//     })
//     await csvWriter.writeRecords(records)
// }
// write_csv.get_header = get_header

// module.exports = write_csv

const csvStringifier = require('csv-writer').createArrayCsvStringifier
const dayjs = require('dayjs')

// const get_header = (records) => Object.keys(records[0]).map((key) => ({ id: key, title: key }))

async function write_csv({ missedRecords, corruptedRecords, newlyCreatedRecords }) {
    // reocrds is an object { missedRecords, corruptedRecords, newlyCreatedRecords };
    // need to destructure these and create csv fro mit. 

    console.log(newlyCreatedRecords);
    header = get_header(newlyCreatedRecords)
    return csvStringifier({
        header,
        records
    })
}

module.exports = write_csv