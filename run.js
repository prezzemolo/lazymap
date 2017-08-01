const impl = require('./impl')

const array = []
for (let count = 0; count < 10000; count++) {
    array.push(Math.random())
}

const callback = (num) => num * 10

console.time('impl generator')
for (const ans of impl.generator(array, callback)) {}
console.timeEnd('impl generator')

console.time('impl homemade iterator')
const it = impl.homemade(array, callback)
for (const ans of it) {}
console.timeEnd('impl homemade iterator')

console.time('impl psuedo map')
impl.map(array, callback)
console.timeEnd('impl psuedo map')

console.time('array iterate')
for (const ans of array) {
}
console.timeEnd('array iterate')

console.time('array.map')
array.map(callback)
console.timeEnd('array.map')

