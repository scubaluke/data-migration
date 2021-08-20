import { compareObj } from './compareObj.js';

const findMissedAndCorrupted = (newData, oldData) => {
  console.log('searching for missed and corrupted data since migration');
  const missedData = [];
  const corrupted = [];
  oldData.forEach((oldDocument) => {
    const newDocumentMatch = newData.find(
      (newDocument) => newDocument.id === oldDocument.id
    );
    if (newDocumentMatch) {
      if (compareObj(newDocumentMatch, oldDocument)) {
        // push new corrupted data
        corrupted.push(newDocumentMatch);
      }
      // if document is not in both DB's it was missed during migration
    } else {
      missedData.push(oldDocument);
    }
  });
  return { missedData, corrupted };
};

export default findMissedAndCorrupted;
