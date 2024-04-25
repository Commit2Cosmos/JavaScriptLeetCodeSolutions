`Given an integer array nums, return an array answer such that answer[i] 
 is equal to the product of all the elements of nums except nums[i].`

const func = (nums) => {

    let result = [1];
    let preprod = 1, postprod = 1;

    for (let i = 1; i < nums.length; i++) {
        preprod *= nums[i - 1]
        result[i] = preprod
    }

    for (let j = nums.length - 2; j > -1; j--) {
        postprod *= nums[j+1]
        result[j] *= postprod
    }
    
    return result
}

console.log(func([1,2,3,4,5,6,0]))