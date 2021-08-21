const compareObj = (newObj, oldObj) =>
  newObj.name !== oldObj.name || newObj.email !== oldObj.email;

export default compareObj;
