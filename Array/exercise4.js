//Finding Elements by Value and Index

let studentNames = ["Alice", "Bob", "Charlie", "Alice", "David"];
let firstIndex = studentNames.indexOf("Alice");
console.log("First occurrence of Alice is at index:",firstIndex);

// let studentNames = ["Alice","Bob","charlie","Alice","David"];
let secondIndex = studentNames.indexOf("Bob")
console.log(secondIndex);
let lastIndex = studentNames.lastIndexOf("Alice")
console.log(lastIndex)

//includes the name "Charlie"
console.log(studentNames.includes("Charlie"))
console.log(studentNames.includes("Eve"))