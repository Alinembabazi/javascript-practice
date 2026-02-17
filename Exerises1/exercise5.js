const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 }
];
let foundProduct = products.find(function(products){
    return products.id === 2;
});
console.log(foundProduct);

let foundIndex = products.findIndex(function(product){
    return product.price > 1000
});
console.log("The index is at :",foundIndex);