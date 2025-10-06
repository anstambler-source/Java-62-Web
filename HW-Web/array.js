const arr = [4, 2, 6, 'asd', {1: 'one'}, 23]

const popMethod = Array.prototype.pop
Array.prototype.pop = function() {
    const del = popMethod.apply(this, arguments);
    console.log(`Pop value = ${del}`)
    return del
}

const pushMethod = Array.prototype.push
Array.prototype.push = function (...args) {
    console.log(`Push value = ${args}`);
    return pushMethod.apply(this, args);
}

arr.pop()
arr.push('I did it')
console.log(arr)