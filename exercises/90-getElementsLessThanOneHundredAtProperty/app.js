function getElementsLessThan100AtProperty(obj,key){
    let newArr = []
    for (let value in obj.key) {
        if (value < 100) {
            newArr.push(value)
        }
    }
    return newArr
}