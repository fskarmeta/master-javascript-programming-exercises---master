function getNthElementOfProperty(obj,key,pos) {
    if (Array.isArray(obj.key)) {
        return obj.key[pos]
    } else {
        return undefined
    }
}