let testScores = [45, 78, 92, 30, 65, 88];
let passingScores = testScores.filter(function(score) {
    return score >= 70;
});

console.log("Passing Scores:", passingScores);

// let testScores = [45, 78, 92, 30, 65, 88];

let average = testScores.reduce((sum, score) => sum + score, 0) / testScores.length;

let belowAverage = testScores.filter(score => score < average);

console.log("Average Score:", average);
console.log("Below Average Scores:", belowAverage);
