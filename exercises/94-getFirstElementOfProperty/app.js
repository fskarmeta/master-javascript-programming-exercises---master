function getFirstElementOfProperty(obj,key) {
if (Array.isArray(obj.key)) {
    return obj.key[0]
} else {
    return undefined
}
}