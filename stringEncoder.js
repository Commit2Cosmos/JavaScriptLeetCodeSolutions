function encoder(list) {
    let res = '';
    list.map(str => res += `${str.length}?${str}`)
    console.log(res)
    return res
}

function decoder(str) {
    let res = [];
    let point = 0;

    while (point < str.length) {
        let num = "";

        while (str[point] != "?") {
            num += str[point];
            point++;
        }

        point++;
        let word = '';

        const lim = parseInt(num) + parseInt(point);

        for (let i = point; i < lim; i++) {
            word += str[i];
            point++;
        }

        res.push(word);
    }
    
    console.log(res)
    return res;
}

const encoded = encoder(["33???hel2?34o", "4y2??31e???s?1", "4bo3?4"]);

decoder(encoded);