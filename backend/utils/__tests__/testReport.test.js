const { newData, oldData } = require('../testDataset.js');
const generateReport = require('../generateReport');

let result;
beforeAll(async (done) => {
  result = generateReport(newData, oldData);
  console.log('first results', result);
  done();
});
describe('when generateReport runs', () => {
  test('finds records missed in migration', () => {
    expect(result.missedRecords[0].name).toEqual('Missed in migration');
  });
  test('finds corrupted records', () => {
    expect(result.corruptedRecords[0].name).toEqual('corrupted');
    expect(result.corruptedRecords[1].email).toEqual('corruptEmail@gmail.com');
  });
  test('finds new records', () => {
    expect(result.newRecords[0].name).toEqual('Newly added data');
  });
});
