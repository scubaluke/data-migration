import { compareObj } from './compareObj';

export const generateReport = (newRecords, oldRecords) => {
  const missedRecords = [];
  const corruptedRecords = [];
  /* eslint no-plusplus: "error" */
  for (let i = oldRecords.length - 1; i >= 0; i -= 1) {
    const oldRecord = oldRecords[i];
    const newRecord = newRecords.find((record) => record.id === oldRecord.id);
    if (newRecord) {
      if (compareObj(oldRecord, newRecord)) {
        corruptedRecords.push(newRecord);
      }
      // remove newRecord from newRecords so we dont process it again. leaving newlyCreated newRecords
      const newRecordIndex = newRecords.indexOf(newRecord);
      newRecords.splice(newRecordIndex, 1);
    } else {
      missedRecords.push(oldRecord);
    }
    // remove oldRecord from oldRecords so we dont have to iterate again.
    oldRecords.splice(i, 1);
  }
  console.log('Finished Scanning DB');
  return { missedRecords, corruptedRecords, newRecords };
};

// export default generateReport;
