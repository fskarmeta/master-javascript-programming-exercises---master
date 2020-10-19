function findMaxLengthOfThreeWords(x,y,z) {
    return [x,y,z].map(a=> a.length).sort((a,b) => b-a)[0]
}