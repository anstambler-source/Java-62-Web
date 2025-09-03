const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0]
printArray(arr)
sort(arr)
printArray(arr) // 0, 1, 1, 2, 2, 2, 4, 5, 9, 9

function sort(arr) {
    flag = true
    let temp = 0
    do {
        flag = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i + 1]
                arr[i + 1] = arr[i]
                arr[i] = temp
                flag = true
            }
        }
    } while (flag)
}

function printArray(arr) {
    console.log('==============')
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    console.log('==============')
}