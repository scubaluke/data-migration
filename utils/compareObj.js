export let corruptedObjs = []

export const compareObj = (newObj, oldObj) => {
    if (newObj.name !== oldObj.name || newObj.email !== oldObj.email || Object.keys(newObj).length !== 4 ) {
        corruptedObjs.push(newObj)
    }
}
 