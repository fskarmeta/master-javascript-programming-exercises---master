function getAllElementsButNth(x, y) {
    return [...x.slice(0, y), ...x.slice(y + 1, x.length)]
}