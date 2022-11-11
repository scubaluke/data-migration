module.exports = (newObj, oldObj) =>
    newObj.name !== oldObj.name || newObj.email !== oldObj.email;
