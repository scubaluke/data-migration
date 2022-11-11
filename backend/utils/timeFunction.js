const timeFunction = ({ callback, callbackParams } = {}) => {
    console.log('Scanning database, compiling report');
    const startTime = performance.now();

    const data = callback(callbackParams);
    const endTime = performance.now();
    const runTime = ((endTime - startTime) / 1000).toFixed(2);

    console.log('Finished scanning database, sending report');
    return { runTime, ...data };
}

module.exports = timeFunction;
