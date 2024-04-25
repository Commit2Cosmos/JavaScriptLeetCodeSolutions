function solution(strs) {

    let res = {}

    strs.forEach(str => {
        let letters = str.split('').sort();

        res[letters] ? res[letters].push(str) : res[letters] = [str]
    });

    // CONVERT FROM MAP TO ARRAY
    const keys = Object.keys(res);
    const values = keys.map(val => res[val])

    console.log(values)
    return values
}

solution(["eat","tea","tan","ate","nat","bat"]);