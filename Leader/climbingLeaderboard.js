function climbingLeaderboard(ranked, player) {
    let place = 0;
    let output = [];
    player.forEach(iPlay => {
        let decrementer = 0;
        for (let iRank = 0; iRank < ranked.length; iRank++) {
            if (iRank !== 0 && ranked[iRank] === ranked[iRank-1]) {
                decrementer += 1;
            }
            if (iPlay >= ranked[iRank]) {
                place = ranked.indexOf(ranked[iRank]) + 1;
                place -= decrementer;
                output.push(place);
                break;
            }
        }
        if (iPlay < ranked[ranked.length - 1]) {
            place = ranked.length + 1;
            place -= decrementer;
            output.push(place)
        }
    })
    console.log(output);
}

climbingLeaderboard([100, 100, 100, 100, 410, 100, 10], [5, 25, 50, 120])

