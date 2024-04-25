const longestConsecutive = (nums) => {

    let numsSet = new Set(nums)
    let longest = 0

    for (let i of numsSet) {
        let length = 0
        if (!numsSet.has(i-1)) {
            while (numsSet.has(i+length)) {
                length += 1
            }
        }
        longest = Math.max(length, longest)
    }
    return longest
}

console.log(longestConsecutive([2,3,4,5,6,3,2,1,7,8,9,10]))