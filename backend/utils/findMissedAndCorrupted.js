const findMissedAndCorrupted = (newData, oldData) => {
  console.log('searching for missed and corrupted data since migration');
  const missedData = [];
  const corrupted = [];
  oldData.forEach((oldDocument) => {
    // find id in both DB's
    const newDocumentMatch = newData.filter(
      (newDocument) => newDocument.id === oldDocument.id
    );
    // if document exists in both DB's check to see if it has been changed / corrupted
    if (newDocumentMatch.length > 0) {
      // if data doesn't match, data is corrupted
      if (
        newDocumentMatch[0].name !== oldDocument.name ||
        newDocumentMatch[0].email !== oldDocument.email
      ) {
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
