function getIndexOf(char, str) {
for (i = 0; i <= str.length; i++) {
    if (str.split("")[i] == char) {
        return i
    } else {
        return -1
    }
}
}