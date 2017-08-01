exports.generator = function* (array, callback) {
    var index = 0
    while (array.length > index) {
        yield callback(array[index++])
    }
}

exports.homemade =  (array, callback) => {
    var proto = {}
    proto[Symbol.iterator] = () => {
        var index = 0
        return {
            next: () => index < array.length ?
                {value: array[index++], done:false} :
                {done:true}
        }
    }
    return {
        __proto__: proto
    }
}

