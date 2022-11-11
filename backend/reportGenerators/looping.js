/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const notEqual = require('../utils/notEqual')

module.exports = ({ newRecords, oldRecords }) => {
    const missedRecords = [];
    const corruptedRecords = [];

    oldRecords.forEach((oldRecord) => {
        const newRecordIndex = newRecords.findIndex(
            (newRecord) => newRecord.id === oldRecord.id
        );
        if (newRecordIndex >= 0) {
            const newRecord = newRecords[newRecordIndex];
            if (notEqual(newRecord, oldRecord)) {
                corruptedRecords.push(newRecord);
            }
            // remove the record so we are left with newlyCreatedRecords
            newRecords.splice(newRecordIndex, 1);
        } else {
            missedRecords.push(oldRecord);
        }
    });

    return { missedRecords, corruptedRecords, newlyCreatedRecords: newRecords };
};

