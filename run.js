const lazy = require('./lazy')

const array = []
for (let count = 0; count < 10000; count++) {
    array[count] = Math.random().toString()
}

const callback = (num) => num * 10

console.time('generator')
for (const ans of lazy.generator(array, callback)) {
    console.warn(ans)
}
console.timeEnd('generator')

console.time('array.map')
array.map(callback).forEach(ans => console.warn(ans))
console.timeEnd('array.map')
