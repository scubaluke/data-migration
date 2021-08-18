import { compareObj } from './compareObj.js'

const findCorruptedData = (newArr, oldArr) => {
    newArr.forEach(el => {
        const found = oldArr.filter(d => d.id === el.id)
        if (found.length > 0) {
            compareObj(el, found[0])
        }
    })
}
export default findCorruptedData
