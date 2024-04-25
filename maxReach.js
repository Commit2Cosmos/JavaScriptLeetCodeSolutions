function maxReach(nums) {
    let i = 0, maxReach = 0;
    while (i < nums.length && i <= maxReach) {
        maxReach = Math.max(i + nums[i], maxReach);
        i++;
    }
    if(i == nums.length)
        return true;
    return false;
}

console.log(maxReach([2,1,0,2]))