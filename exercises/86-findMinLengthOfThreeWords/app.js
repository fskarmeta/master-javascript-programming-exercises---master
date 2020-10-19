function findMinLengthOfThreeWords(x, y, z) {
    return [x, y, z].map(a => a.length).sort((a, b) => a - b)[0]
}