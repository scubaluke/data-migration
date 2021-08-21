const notEqual = (newObj, oldObj) =>
  newObj.name !== oldObj.name || newObj.email !== oldObj.email;

const generateReport = (newRecords, oldRecords) => {
  console.log('Scanning database, compiling report');
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
      // remove newRecord so we are left with newlyCreatedRecords
      newRecords.splice(newRecordIndex, 1);
    } else {
      missedRecords.push(oldRecord);
    }
  });
  console.log('Finished scanning database, sending report');
  return { missedRecords, corruptedRecords, newRecords };
};
module.exports = generateReport;
