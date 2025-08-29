// 1
function sumDigits(num) {
    let sum = 0
    let t
    while (num !== 0) {
        t = num % 10
        sum += t
        num = (num - t) / 10
    }
    return sum;
}

let res = sumDigits(12342)
console.log(`sum = ${res}`)



// 2
function luckyNumber (num) {
let strNum = '' + num
    let s1 = 0
    let s2 = 0
    for (let i = 0; i < strNum.length; i++) {
        i % 2 !== 0 ? s1 -= strNum[i] : s2 -= strNum[i]
    }
    return s1 === s2;
}

res = luckyNumber(21234532)
console.log(`${res ? 'lucky' : 'not lucky'}`)