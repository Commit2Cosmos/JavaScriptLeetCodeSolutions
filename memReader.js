// function memReader(arr, jump = 1) {
//     if (arr.length == 1) return true;

//     for (let i = 1; i > -2; i--) {
//         const tot = jump + i;
//         if (tot != 0 && arr.includes(tot + arr[0])) {
//             return memReader(arr.slice(arr.indexOf(tot + arr[0])), tot)
//         }
//     }
// }

const ar = [1,3,4,6,7]

function memReader(memory) {
    let n = memory.length;

    // Initialize an unordered set to keep track of the possible jump lengths.
   const dp = new Set();

    // The first jump is always of length memory[0].
    dp.add(memory[0]);

    for (let i = 1; i < n - 1; i++)
    {
        // Check all ways to reach this point.
        for (let j = 0; j < i; j++)
        {
            let jumpLength = memory[i] - memory[j];
            // Check if the jump is valid.
            if (dp[j].count(jumpLength) || dp[j].count(jumpLength - 1) || dp[j].count(jumpLength + 1))
            {
                dp[i].insert(jumpLength);
            }
        }
    }

    // If there is any way to reach the last stone, the set is non empty.
    if (dp[n - 1].length > 0)
    {
        return "YES";
    }

    return "NO";
}