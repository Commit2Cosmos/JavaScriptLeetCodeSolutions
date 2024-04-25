function solutionGeneral(nums, sum) {
    // number : index
    const map = {};
    let pointer = 0;
    while (true) {
        const numsPoint = nums[pointer];
        const index1 = map[sum - numsPoint];
        if (index1 != undefined) {
            return [index1, pointer];
        }
        
        map[numsPoint] = pointer;
        pointer++;
    }
}


function solutionSorted(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum > target) {
            right--;
        }
        else if (sum < target) {
            left++;
        }
        else {
            return [left, right];
        }
    }
}

// console.log(solutionGeneral([3,3], 6));
console.log(solutionSorted([-1, 3, 3, 5, 6], 6));