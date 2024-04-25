const convertToSystemPrint = (n, radix) => {
    if (n === 0) return '0'
    if (n === 1) return '1'
    let rem = n % radix;
    // if (rem != 1) return false
    return convertToSystemPrint(Math.floor(n / radix), radix) + rem
}

// const numberOfOnesInBinary = (n, radix = 2) => {
//     return convertToBinary(n, radix).split('0').join('').length
// }




const convertToSystemOnly1s = (n, radix) => {
    if (n === 0) return false
    if (n === 1) return true
    if (n % radix != 1) return false
    if (!convertToSystemOnly1s(Math.floor(n / radix), radix)) return false
    return true 
}



const containsOnlyOnes = (n) => {
    let i = 2;
    
    while (!convertToSystemOnly1s(n,i)) {
        i++
    }
    return i
}

// const n = 3;
// const nn = containsOnlyOnes(n);

// console.log(`${nn}: ${convertToSystemPrint(n,nn)}`)





const containsOnlyOnes1 = (n) => {
    let i = 2;
    let regex = /^1+$/g
    while (true) {
        if (regex.test(n.toString(i))) return i
    }
}


const n = 135;
console.log(containsOnlyOnes1(n))