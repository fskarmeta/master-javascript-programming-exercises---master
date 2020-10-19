function getOddLengthWordsAtProperty(obj,key) {
let newArr = []
if (Array.isArray(obj.key)) {
    for (let i of obj.key) {
        if (i.length % 2 !== 0) {
            newArr.push(i)
        }
    }
}
return newArr
}
