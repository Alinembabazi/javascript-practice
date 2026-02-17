let originalScores = [90, 85, 78];
let referenceCopy = originalScores;
console.log(originalScores)
referenceCopy.push(100)

console.log(referenceCopy)

referenceCopy[0]=100;
console.log(referenceCopy)

//shallow copy spreadCopy using the spread operator 

let originalScore = [90,85,78];
let spreadCopy = [...originalScores];
spreadCopy.push(100);
console.log("Original Array:",originalScore);
console.log("Spread Copy:" , spreadCopy);

