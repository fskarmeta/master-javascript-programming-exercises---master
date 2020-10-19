function computeAverageOfNumbers(x) {
    if (x.length > 0) {
        return x.reduce((a,b) => (a+b)) / x.length
    } else {
        return 0
    }
}