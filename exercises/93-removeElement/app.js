function removeElement(arr, d){
    let newArr = []
    for (let i of arr) {
        if (i == d) {
            newArr.push(i)
        }
    }
    return newArr
}