function almostIncreasingSequence(sequence) {
    let newArray = [...sequence];
    let counter = 0;
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] >= sequence[i+1]) {
            newArray.splice(i+1, 1);
            console.log(newArray);
            counter += 1;
        }
    }
    
    for (let i = 0; i < newArray.length - 1; i++) {
        if (newArray[i] >= newArray[i+1]) {
            counter += 1;
        }
    }
    
    if (counter === 0 || counter === 1) {
        console.log(true)
        return true
    }
    console.log(false)
    return false;
}

almostIncreasingSequence([1, 2, 3, 4, 3, 6]);