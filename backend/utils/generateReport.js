/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const notEqual = (newObj, oldObj) =>
  newObj.name !== oldObj.name || newObj.email !== oldObj.email;

const generateReport = ({ newRecords, oldRecords }) => {
  const startTime = performance.now();

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
  // const oldDataObj = {};
  // const newDataObj = {};
  // for (const record in oldRecords) {
  //   oldDataObj[oldRecords[record].id] = oldRecords[record];
  //   if (newRecords[record]) {
  //     newDataObj[newRecords[record].id] = newRecords[record];
  //   }
  // }

  // for (const item in oldDataObj) {
  //   const { id } = oldDataObj[item];
  //   if (newDataObj[id]) {
  //     if (notEqual(oldDataObj[id], newDataObj[id])) {
  //       corruptedRecords.push(newDataObj[id]);
  //     }
  //     delete newDataObj[id];
  //   } else {
  //     missedRecords.push(oldDataObj[id]);
  //   }
  // }
  // const newlyCreatedRecords = Object.values(newDataObj);

  console.log({ newRecords: newRecords.length, oldRecords: oldRecords.length });

  const endTime = performance.now();

  console.log(
    `Call to doSomething took ${((endTime - startTime) / 1000).toFixed(
      2
    )} seconds`
  );
  console.log('Finished scanning database, sending report');
  return { missedRecords, corruptedRecords, newlyCreatedRecords: newRecords };
};

module.exports = generateReport;
