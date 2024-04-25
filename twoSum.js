let twoSum = function(numbers, target) {
    let i = 0
    let c = 0
    let notDone = true

    while (notDone) {
        let temp = target - numbers[0]
        numbers.splice(0,1)
        i += 1
        if (numbers.includes(temp)) {
            c = numbers.indexOf(temp)
            c += i
            notDone = false
        }
    }
    return [i, c+1]
}

console.log(twoSum([1,1,2,2,3,6,6,7,8],12))