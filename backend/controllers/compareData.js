import getPoolOld from '../connectDB/getPoolOld.js';
import getPoolNew from '../connectDB/getPoolNew.js';

import findMissedAndCorrupted from '../utils/findMissedAndCorrupted.js';
import findNewlyCreated from '../utils/findNewlyCreated.js';

const compareData = (req, res) => {
  const poolOld = getPoolOld();
  poolOld.query('SELECT * FROM accounts', (errOld, oldData) => {
    if (errOld) {
      console.log(errOld);
      res.status(400).send(errOld);
      poolOld.end();
    } else {
      const poolNew = getPoolNew();
      poolNew.query('SELECT * FROM accounts', (errNew, newData) => {
        if (errNew) {
          console.log(errNew);
          res.status(400).send(errNew);
          poolNew.end();
          poolOld.end();
        } else {
          const missedAndCorrupted = findMissedAndCorrupted(
            newData.rows,
            oldData.rows
          );
          const { missedData, corrupted } = missedAndCorrupted;
          const newlyCreated = findNewlyCreated(newData.rows, oldData.rows);
          res.status(200).send({
            missedDataLength: missedData.length,
            corruptedLength: corrupted.length,
            newlyCreatedLength: newlyCreated.length,
            missedData,
            corrupted,
            newlyCreated,
          });
        }
      });
    }
  });
};

export default compareData;
