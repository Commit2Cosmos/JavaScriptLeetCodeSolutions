const sortColorsSimple = function(nums: number[]) {

    let count: number[] = [...Array(3)].fill(0);

    for (let i of nums) {
        switch (i) {
            case 0:
                count[0]++;
                break;
            case 1:
                count[1]++;
                break;
            case 2:
                count[2]++;
                break;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        i < count[0] ? (nums[i] = 0) : i < (count[0] + count[1]) ? (nums[i] = 1) : (nums[i] = 2);
    }

    console.log(nums);

};

const sortColorsPointers = function(nums: number[]) {
    let left = 0;
    let right = nums.length - 1;
    let i = 0;

    while (i <= right) {
        switch (nums[i]) {
            case 0:
                [nums[i], nums[left]] = [nums[left], nums[i]];
                i++;
                left++;
                break;

            case 1:
                i++;
                break;

            case 2:
                [nums[i], nums[right]] = [nums[right], nums[i]];
                right--;
                break;
        }
    }

    console.log(nums);

}

sortColorsPointers([2,0,1]);