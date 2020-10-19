function getElementsGreaterThan10AtProperty(obj,key){
    let newArr = []
    for (let value in obj.key) {
        if (value > 10) {
            newArr.push(value)
        }
    }
    return newArr
}