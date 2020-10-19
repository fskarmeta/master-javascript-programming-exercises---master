function getAverageOfElementsAtProperty(obj, key) {
    if (Array.isArray(obj.key) && obj.key.length > 0) {
        return obj.key.reduce((a, b) => a + b) / obj.key.length
    } else {
        return 0
    }
}
