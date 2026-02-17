 let nestedList = [1, [2, 3], [4, [5, 6]], 7]
 let flatOnce = nestedList.flat();
console.log("Flat once:", flatOnce);
let completelyFlat = nestedList.flat(Infinity);
console.log("Completely flat:", completelyFlat);
