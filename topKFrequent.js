function solution(nums, k) {

    let res = {};

    nums.forEach(num => {
        res[num] ? res[num]+=1 : res[num] = 1;
    });

    const keys = Object.keys(res);
    const sorted = keys.sort((a, b) => res[b] - res[a])
    const answer = sorted.slice(0, k)

    console.log(answer);
    return answer;
}

solution([1,1,1,2,2,3], 2)