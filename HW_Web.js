const arr = [8, 8, 7, 6, 8, 4]

const maxValueAndIndex = function (arr) {
    if (arr.length === 0) {
        console.log('The array is empty');
        return
    }
    let arrEI = [0]
    let maxSum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            console.log('Wrong value in the array')
            return;
        }

        else if (arr[i] > maxSum) {
            maxSum = arr[i]
            arrEI = []
            arrEI.push(i)
        }
        else if (arr[i] === maxSum) {
            arrEI.push(i)
        }
    }
    console.log(`Max Sum = ${maxSum}\nIndex of Max Values =`, arrEI)
}

maxValueAndIndex(arr)