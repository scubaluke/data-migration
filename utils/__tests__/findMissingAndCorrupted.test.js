import { newData, oldData } from '../testDataset.js';
import findMissedAndCorrupted from '../findMissedAndCorrupted.js';

describe('when findMissedAndCorrupted runs', () => {
  test('finds data missed', () => {
    const result = findMissedAndCorrupted(newData, oldData);
    expect(result.missedData[0].name).toEqual('Missed in migration');
  });
});
