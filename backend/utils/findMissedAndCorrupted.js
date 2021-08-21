const compareObj = (newObj, oldObj) =>
  newObj.name !== oldObj.name || newObj.email !== oldObj.email;

const findMissedAndCorrupted = (newData, oldData) => {
  console.log('searching for missed and corrupted data since migration');
  const missedData = [];
  const corrupted = [];
  oldData.forEach((oldDocument) => {
    // find id in both DB's
    const newDocumentMatch = newData.find(
      (newDocument) => newDocument.id === oldDocument.id
    );
    // if document exists in both DB's check to see if it has been changed / corrupted
    if (newDocumentMatch) {
      if (compareObj(oldDocument, newDocumentMatch)) {
        corrupted.push(newDocumentMatch);
      }
    } else {
      missedData.push(oldDocument);
    }
  });
  return { missedData, corrupted };
};

export default findMissedAndCorrupted;
