let inventory = [10, 20, 30];
inventory.push(40);
console.log(inventory)
inventory.pop();
console.log(inventory)
inventory.unshift(0)
console.log(inventory)
inventory.shift()
console.log(inventory)
// use splice 
inventory.splice(1,1,25,35)
console.log(inventory)