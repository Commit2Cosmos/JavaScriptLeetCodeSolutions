const LCDS = (n) => {
    let i = 0;

    let maxSize = 0;
    let maxArr = [];

    while (i < n.length) {
        let arr = [n[i]];

        while (n[i + 1] !== n.length && n[i + 1] < n[i]) {
            arr.push(n[i + 1])
            i++
        }

        if (arr.length > 1 && maxSize < arr.length) {
            maxSize = arr.length
            maxArr = arr;
        }

        i++
    }

    return maxArr
}


console.log(LCDS([1,2,3,4,5,4,3,2,1,2,5,4,3,2,6,4,5,67,7,6,5,4,1,0,0]))