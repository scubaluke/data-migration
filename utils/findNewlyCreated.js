const findNewlyCreated = (newData, oldData) => {
  console.log('searching for data added since migration');
  const addedSince = [];
  newData.forEach((newDocument) => {
    // find id in both DB's
    const hold = oldData.filter(
      (oldDocument) => oldDocument.id === newDocument.id
    );
    // if document is not in both DB's document has been added to DB since migration
    if (hold.length === 0) {
      addedSince.push(newDocument);
    }
  });
  return addedSince;
};

export default findNewlyCreated;
