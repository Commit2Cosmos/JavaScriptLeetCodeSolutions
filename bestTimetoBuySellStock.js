const maxProfit = function(prices) {
    let i = 0;
    let profit = 0;
    while (i < prices.length - 1) {
        const o = prices[i]
        const p = prices[i+1]
        if (p > o) profit += p - o
        i++
    }
    console.log(profit)
};

const prices = [7,6,4,3,1]
maxProfit(prices)