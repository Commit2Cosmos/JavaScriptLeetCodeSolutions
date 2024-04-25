const minSwaps = function(s) {
    let max = 0;
    let tot = 0;
    for (let i = 0; i < s.length; i++) {
        const bracket = s[i];

        if (bracket == "]") tot = tot + 1;
        if (bracket == "[") tot = tot - 1;

        max = Math.max(max, tot)
    }
    return Math.ceil(max/2)
};


console.log(minSwaps("[]"))