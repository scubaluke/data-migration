const notEqual = (newObj, oldObj) =>
    newObj.name !== oldObj.name || newObj.email !== oldObj.email;

module.exports = notEqual