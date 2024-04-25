const convert = function(s: string, numRows: number): string {
    if (numRows === 1) return s;

    let res = "";
    
    const increment = (numRows-1)*2;

    for (let row = 0; row < numRows; row++) {
        for (let i = row; i < s.length; i += increment) {
            res += s[i];
            // check if in middle row
            let xtra = i + increment - 2*row;
            if (row > 0 && row < numRows - 1 && (xtra < s.length)) {
                res += s[xtra];
            }
        }
    }
    
    return res;
};

console.log(convert("ABCDEFGHIJKLMN", 4))