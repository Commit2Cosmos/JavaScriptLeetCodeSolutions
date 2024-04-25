function longSolution(nums) {

    const len = nums.length;
    let res = new Array(len);
    let prefix = new Array(len);
    prefix[0] = nums[0];
    let postfix = new Array(len);
    postfix[len-1] = nums[len-1];

    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i-1] * nums[i];
    }

    for (let i = len-2; i >= 0; i--) {
        postfix[i] = postfix[i+1] * nums[i];
    }
    
    for (let i = 1; i < nums.length-1; i++) {
        res[i] = prefix[i-1] * postfix[i+1];
    }

    res[0] = postfix[1];
    res[len-1] = prefix[len-2];
}

function shortSoolution(nums) {

    const len = nums.length;
    let res = new Array(len);
    res[0] = 1;

    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i-1] * nums[i-1];
    }
    let post = 1;
    for (let i = len-1; i >= 0; i--) {
        res[i] *= post
        post *= nums[i]
    }

    return res
}

shortSoolution([1,2,3,4]);