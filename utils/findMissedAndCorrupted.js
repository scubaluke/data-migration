const findMissedAndCorrupted = (newData, oldData) => {
  console.log('searching for missed and corrupted data since migration');
  const missedData = [];
  const corrupted = [];
  oldData.forEach((oldDocument) => {
    // find id in both DB's
    const hold = newData.filter(
      (newDocument) => newDocument.id === oldDocument.id
    );
    // if document is in both DB's check to see if it has been changed / corrupted
    if (hold.length > 0) {
      // if data doesn't match = corrupted
      if (
        hold[0].name !== oldDocument.name ||
        hold[0].email !== oldDocument.email
      ) {
        corrupted.push(oldDocument);
      }
      // if document is not in both DB's it was missed during migration
    } else {
      missedData.push(oldDocument);
    }
  });
  return { missedData, corrupted };
};

export default findMissedAndCorrupted;
