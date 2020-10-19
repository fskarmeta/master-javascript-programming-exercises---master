function getLastElementOfProperty(obj,key) {
    return Array.isArray(obj.key) ? obj.key[obj.key.length-1] : undefined
}