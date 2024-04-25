function twoSum(input, target = 0) {
    const nums = input.sort();
    let result = [];

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum > target) {
            right--;
        }
        else if (sum < target) {
            left++;
        }
        else {
            result.push([left, right]);
        }
    }
}


function solution(input, target) {
    const nums = input.sort();

    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let ith = nums[i];

        if (i > 0 && ith == nums[i-1]) {
            continue;
        }

        let right = nums.length - 1;
        while (left < right) {
            
            while (nums[left] == nums[left-1] && nums[left] != ith) {
                left++;
            }

            const sum = nums[left] + nums[right];
            const check = target - sum;

            if (check < ith) {
                right--;
            }
            else if (check > ith) {
                left++;
            }
            else {
                result.push([ith, nums[left], nums[right]]);
                right--;
                left++;
            }
        }
    }

    return result;
}

// 1,2,4
console.log(solution([-2,0,0,2,2], 0));