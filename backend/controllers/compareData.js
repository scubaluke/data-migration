import getNewData from '../getData/getNewData.js';
import getOldData from '../getData/getOldData.js';
import findMissedAndCorrupted from '../utils/findMissedAndCorrupted.js';
import findNewlyCreated from '../utils/findNewlyCreated.js';

const compareData = async (req, res) => {
  const oldData = await getOldData();
  const newData = await getNewData();

  try {
    const { missedData, corrupted } = findMissedAndCorrupted(newData, oldData);
    const newlyCreated = findNewlyCreated(newData, oldData);

    res.status(200).send({
      missedDataLength: missedData.length,
      corruptedLength: corrupted.length,
      newlyCreatedLength: newlyCreated.length,
      missedData,
      corrupted,
      newlyCreated,
    });
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
  }
};

export default compareData;
