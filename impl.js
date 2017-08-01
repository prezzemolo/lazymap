exports.generator_with_while = function* (array, callback) {
    var index = 0
    while (array.length > index) {
        yield callback(array[index++])
    }
}

exports.generator_with_for = function* (array, callback) {
    for (var index = 0; array.length > index; index++) {
        yield callback(array[index++])
    }
}

exports.generator_with_do_while = function* (array, callback) {
    var index = 0
    do
        yield callback(array[index++])
    while (array.length > index)
}

exports.homemade =  (array, callback) => {
    var proto = {}
    proto[Symbol.iterator] = () => {
        var index = 0
        return {
            next: () => index < array.length
                ? {
                    value: array[index++],
                    done:false
                }
                : {
                    done:true
                }
        }
    }
    return {
        __proto__: proto
    }
}

exports.map = (array, callback) => {
    // mean return value
    var rv = []
    for (var index = 0; index < array.length; index++) {
        rv.push(array[index])
    }
    return rv
}
