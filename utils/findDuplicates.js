 const findDuplicates = (array) => {
    const itemIds = array.map(d => d.id)

    const uniqueData = new Set(itemIds)
    // console.log(uniqueData.size);
    const filteredElements = itemIds.filter(item => {
        if (uniqueData.has(item)) {
            uniqueData.delete(item)
        } else {
            return item
        }
    })
    return [...new Set(filteredElements)]
}

export default findDuplicates