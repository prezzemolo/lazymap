exports.generator = function* (array, callback) {
    var index = 0
    while (array.length > index) {
        yield callback(array[index])
        index++
    }
}
