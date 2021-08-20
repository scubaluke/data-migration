import { newData, oldData } from '../testDataset.js';
import findNewlyCreated from '../findNewlyCreated.js';

test('finds data missed during migration', () => {
  const result = findNewlyCreated(newData, oldData);

  expect(result[0].name).toEqual('Newly added data');
});
