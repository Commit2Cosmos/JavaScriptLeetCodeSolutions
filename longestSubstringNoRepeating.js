function solution(string) {
    let result = 1;
    let left = 0;
    let right = 1;
    const set = new Set([string[left]]);

    while (right < string.length) {
        if (set.has(string[right])) {
            set.delete(string[left])
            left++;
        }

        else {
            set.add(string[right])
            right++;
        }
        result = Math.max(result, right - left);
    }
    console.log(result);
}

solution('abcabcdfab');