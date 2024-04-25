function solution(string, k) {
    let left = 0;
    let right = 0;
    let result = 0;

    const map = {};

    while (right < string.length) {
        console.log(map);
        map[string[right]] ? map[string[right]]++ : map[string[right]] = 1;
        
        const values = Object.values(map);
        const mm = Math.max(...values);
        if ((right - left + 1 - mm) > k) {
            map[string[left]]--;
            left++;
        }

        result = Math.max(result, right - left + 1);

        right++;
    }

    return result;
}

// console.log(solution('AABAABBBAA', 1));
solution('AABBAA', 1);