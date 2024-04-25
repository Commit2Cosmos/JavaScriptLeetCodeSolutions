const subarraySumBruteForce = function(nums, k) {
    let left = 0;
    let res = 0;

    while (left < nums.length) {
        let sum = nums[left];
        if (sum === k) res++;
        let right = left + 1;
        while (right < nums.length) {
            sum += nums[right]
            right++;
            if (sum === k) res++;
        }
        left++;
    }

    return res
};

const subarraySumHashMap = function(nums, k) {
    const prefixSum = new Map();
    let sum = 0;
    let res = 0;
    //* empty prefix at the start
    prefixSum.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const diff = sum - k;
        if (prefixSum.has(diff)) res += prefixSum.get(diff);
        prefixSum.has(sum) ? prefixSum.set(sum, prefixSum.get(sum) + 1) : prefixSum.set(sum, 1)
    }

    // console.log(res)
    return res
}

const nums = [1,-1,0];
console.log(subarraySumHashMap(nums, 0))