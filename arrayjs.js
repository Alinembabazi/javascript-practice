let array = [1,2,4,6,7,8];
array.push(9);// adding element at the end of array
array.shift(5); // remove the first element from the array 
array.pop(5);// remove  the last  element 
array.unshift(0); // adding the element at the beginning of array 
console.log(array);

const months = ["Jan","March","April" ,"June"];
months.splice(1,0,"Feb");
console.log(months);
months.splice(5,1,"july")
months.splice(4,0,"May")
months.splice(0,1,"December")
console.log(months);

console.log(fruit.lastIndexOf("banana"))
//searching and indexing 

let fruit =[ "apple", "mango", "banana","orange",""];
console.log(fruit.indexOf("banana"));
console.log(fruit.includes("apple"));// include check if the array contain a certaion  element and return true or false  

// find method return the value of the first element in the array that satisfies the 
let foundFruit = fruit.find(fruit => fruit.startsWith("b"));
console.log(foundFruit);

