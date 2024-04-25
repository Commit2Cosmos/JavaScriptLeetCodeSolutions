const interchangeableRectangles = function(rectangles) {
    const ratios = new Map();
    for (let i = 0; i < rectangles.length; i++) {
        const rect = rectangles[i];
        const ratio = rect[0]/rect[1];
        ratios.has(ratio) ? ratios.set(ratio, ratios.get(ratio) + 1) : ratios.set(ratio, 1);
    }

    let res = 0;

    for (let num of ratios.values()) {
        if (num > 1) res = res + Math.floor((num * (num-1))/2)
    }
    return res;
};