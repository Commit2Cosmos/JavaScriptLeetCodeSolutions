function combinationSum(candidates: number[], target: number): number[][] {
    let res: number[][] = [];
    
    
    //* idx to stop repeating sequences
    let sumFinder = (leftover: number, solution: number[], idx: number) => {
        
        if (leftover < 0) return
        if (leftover == 0) { 
            res.push(solution);
            return
        }

        for (let i = idx; i < candidates.length; i++) {
            sumFinder(leftover - candidates[i], [...solution, candidates[i]], i)
        }
    }

    sumFinder(target, [], 0)

    // console.log(Array.from(new Set(res)))
    // console.log(res)
    
    return res
};



const candidates = [2];
const target = 0;


combinationSum(candidates, target)