require('regenerator-runtime/runtime')

const { newRecords, oldRecords } = require('./testDataset.js');
const dataStructureMethod = require('../reportGenerators/dataStructure')
const loopingMethod = require('../reportGenerators/looping')
const timeFunction = require('../utils/timeFunction')

describe('report method', () => {
  test('dataStructure should generate correct report', () => {
    const result = dataStructureMethod({ newRecords, oldRecords });
    // find missed records
    expect(result.missedRecords[0].name).toEqual('Missed in migration');
    // find corrupetd records
    expect(result.corruptedRecords[0].name).toEqual('corrupted');
    expect(result.corruptedRecords[1].email).toEqual('corruptEmail@gmail.com');
    // find new records
    expect(result.newlyCreatedRecords[0].name).toEqual('Newly added data');
    expect(result).toMatchSnapshot();
  });

  test('loop method should generate correct report', () => {
    const result = loopingMethod({ newRecords, oldRecords });
    // find missed records
    expect(result.missedRecords[0].name).toEqual('Missed in migration');
    // find corrupetd records
    expect(result.corruptedRecords[0].name).toEqual('corrupted');
    expect(result.corruptedRecords[1].email).toEqual('corruptEmail@gmail.com');
    // find new records
    expect(result.newlyCreatedRecords[0].name).toEqual('Newly added data');
    expect(result).toMatchSnapshot();
  });
});


test('time function should take in a function return its results as well as the run time', () => {
  const callback = () => {
    return { data: 'data passed through' }
  }
  const { runTime, data } = timeFunction({ callback })

  expect(runTime).toEqual('0.00');
  expect(data).toEqual('data passed through');
});