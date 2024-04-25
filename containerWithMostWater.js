function maxAreaBruteForce(height) {
    let result = 0;

    for (let left = 0; left < height.length-1; left++) {
        for (let right = 1; right < height.length; right++) {
            result = Math.max(Math.min(height[left], height[right]) * (right - left) , result)
        }
    }
    console.log(result);
    return result;
}


function maxAreaLinear(height) {
    let result = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        result = Math.max(Math.min(height[left], height[right]) * (right - left) , result);
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }


    console.log(result);
    return result;
}



maxAreaLinear([1,8,6,2,5,4,8,3,7])