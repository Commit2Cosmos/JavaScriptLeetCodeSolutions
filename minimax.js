
function miniMaxSum(arr) {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    let maxSum = 0
    let minSum = 0

    for (let i = 0; i < arr.length; i++) {
        if (i != arr.indexOf(max)) {
            minSum += arr[i]
        }
        if (i != arr.indexOf(min)) {
            maxSum += arr[i]
        }
    }

    return {maxSum, minSum}
}

console.log(miniMaxSum([1,2,3,4,5]))