function rob(nums: number[]): number {

    let [left, right] = [0, 0];

    for (let n of nums) {
        let sum = Math.max(left + n, right);
        console.log(sum)
        left = right;
        right = sum;
    }

    return right
};





const nums = [2,1,1,2]

console.log(rob(nums))
// rob(nums)