let arr= [123, 345, 'assdf', true, '678']

function sumEvenDigits(num) {
    let newArr = []
    let sum = 0
    for (let x of num) {
        if (typeof x === 'number' || (typeof x === 'string' && +x)) {
            x = '' + x
            for (let i = 0; i < x.length; i++) {
                if (+x[i] % 2 !== 0) {
                    sum += +x[i]
                }
            }
            newArr[newArr.length] = sum
            sum = 0
        }
    }
    return newArr
}

console.log(sumEvenDigits(arr))