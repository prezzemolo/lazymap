const impl = require('./impl')

const array = []
for (let count = 0; count < 10000; count++) {
    array.push(Math.random())
}

const callback = (num) => num * 10

console.time('generator with while loop')
for (const ans of impl.generator_with_while(array, callback)) {}
console.timeEnd('generator with while loop')

console.time('generator with for loop')
for (const ans of impl.generator_with_for(array, callback)) {}
console.timeEnd('generator with for loop')

console.time('homemade iterator')
const it = impl.homemade(array, callback)
for (const ans of it) {}
console.timeEnd('homemade iterator')

console.time('psuedo array.prototype.map')
impl.map(array, callback)
console.timeEnd('psuedo array.prototype.map')

console.time('array.prototype.@@iterator')
for (const ans of array) {}
console.timeEnd('array.prototype.@@iterator')

console.time('array.entries iterator')
for (const ans of array.entries()) {}
console.timeEnd('array.entries iterator')

console.time('array.prototype.map')
array.map(callback)
console.timeEnd('array.prototype.map')
