const countPalindromicSubsequence = function(s) {

    const res = new Set();
    const left = new Set();
    const right = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const val = s.charAt(i);
        right.has(val) ? right.set(val, right.get(val) + 1) : right.set(val, 1)
    }

    for (let i = 0; i < s.length; i++) {
        const mid = s[i];
        const r = right.get(mid);
        if (r === 1) {
            right.delete(mid);
        } else {
            right.set(mid, r - 1);
        }

        for (const [key] of right) {
            if (left.has(key)) res.add(mid + key);
        }
        left.add(mid);
    }

    return res.size;
};

console.log(countPalindromicSubsequence("bbcbaba"))