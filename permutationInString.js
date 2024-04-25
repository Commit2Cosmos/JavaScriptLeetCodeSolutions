function solution(s1, s2) {
    const map1 = {};
    const map2 = {};
    
    const len1 = s1.length;
    const len2 = s2.length;
    
    if (len1 > len2) return false;

    for (let i = 0; i < len1; i++) {
        const ss1 = s1[i];
        const ss2 = s2[i];

        map1[ss1] ? map1[ss1]++ : map1[ss1] = 1;
        map2[ss2] ? map2[ss2]++ : map2[ss2] = 1;
    }

    let matches = 0;
    const set = new Set(s1);
    const setLen = set.size;
    console.log(set);
    console.log(setLen);

    for (let i of set.keys()) {
        if (map1[i] == map2[i]) {
            matches++;
        }
    }

    console.log(map1);
    console.log(map2);
    console.log(matches);

    for (let i = len1; i < len2; i++) {
        if (matches === setLen) return true;

        const ss2 = s2[i];
        const ss = s2[i-len1];

        map2[ss2] ? map2[ss2]++ : map2[ss2] = 1;
        if (map2[ss2] == map1[ss2]) matches++;
        else if (map1[ss2] + 1 === map2[ss2]) matches--;

        map2[ss] -= 1;
        if (map2[ss] == map1[ss]) matches++;
        else if (map1[ss] - 1 === map2[ss]) matches--;
        console.log(matches);

    }

    return matches === setLen;
}

console.log(solution("trinitrophenylmethylnitramine", "dinitrophenylhydrazinetrinitrophenylmethylnitramine"));