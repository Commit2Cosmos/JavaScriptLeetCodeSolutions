function solution(temperatures) {
    let res = [0];
    for (let i = temperatures.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < temperatures.length; j++) {
            const ith = temperatures[i];
            const jth = temperatures[j];

            if (jth > ith) {
                res.unshift(j-i);
                break;
            }
            // else if (jth == ith) {
            //     if (res[0] == 0) res.unshift(0);
            //     else res.unshift(res[0] + j - i);
            //     break;
            // }
            if (temperatures.length - 1 == j) res.unshift(0);
        }
    }
    console.log(res);
}







function solutionLinear(temperatures) {
    let stack = [[temperatures[0], 0]];
    let res = new Array(temperatures.length).fill(0);


    for (let i = 1; i < temperatures.length; i++) {

        const ith = temperatures[i];
        
        while (stack.length > 0 && stack[stack.length - 1][0] < ith) {
            const stackIndex = stack[stack.length - 1][1];
            res[stackIndex] = i - stackIndex;
            stack.pop();
        }
        stack.push([ith,i]);
    }
    // console.log(res);
    return res
}

solutionLinear([73,74,75,71,69,72,76,73])



