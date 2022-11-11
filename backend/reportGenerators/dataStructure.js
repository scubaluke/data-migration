/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const notEqual = require('../utils/notEqual')

module.exports = ({ newRecords, oldRecords }) => {
    const missedRecords = [];
    const corruptedRecords = [];

    const oldDataObj = {};
    const newDataObj = {};
    // create data structure objects with uuid as key
    for (const record in oldRecords) {
        oldDataObj[oldRecords[record].id] = oldRecords[record];
        if (newRecords[record]) {
            newDataObj[newRecords[record].id] = newRecords[record];
        }
    }
    // search data structures for missed, corrupted and new records
    for (const item in oldDataObj) {
        const { id } = oldDataObj[item];
        if (newDataObj[id]) {
            if (notEqual(oldDataObj[id], newDataObj[id])) {
                corruptedRecords.push(newDataObj[id]);
            }
            delete newDataObj[id];
        } else {
            missedRecords.push(oldDataObj[id]);
        }
    }
    const newlyCreatedRecords = Object.values(newDataObj);

    return { missedRecords, corruptedRecords, newlyCreatedRecords };
};


