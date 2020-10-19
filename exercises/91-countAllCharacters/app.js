function countAllCharacters(str) {
    let newArr = str.split("")
    let newObj = {}
    for (let i of newArr) {
        newObj[i] = 0
        for (let j of newArr) {
            if (i == j) {
                newObj[j]++
            }
        }
    }
    return newObj
}