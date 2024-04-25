function solution(target, position, speed) {
    var n = position.length;
    var cars = [];

    if (n == 1) return 1;

    for (var i = 0; i < n; i++) {
        var arrivalTime = (target - position[i]) / speed[i];
        cars.push([position[i], arrivalTime]);
    }
    cars.sort(function (a, b) { return a[0] - b[0]; });
    var fleets = 1;
    for (var i = n - 1; i > 0; i--) {
        if (cars[i - 1][1] > cars[i][1]) {
            fleets++;
        }
        else {
            cars[i - 1][1] = cars[i][1];
        }
    }

    console.log(fleets);
    return fleets;
}

solution(5, [0, 2, 4], [1,2,3]);
