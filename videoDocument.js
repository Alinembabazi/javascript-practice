// object 

const object = require("underscore/cjs/object.js");

// key-value pairs in curly braces 
const myObj= { name: "Dave"}

const anotherObj = {
    alive: true, answer : 42, hobbies:["Eat","Sleep","Cade"],
    beverage:{
        morning:"coffe",
        afternoon: "Ice Tea"
    },
    action: function(){
        return 'time for $(this.beverage.morning'

    }
};
console.log(anotherObj.beverage.morning);


// object 
const vehicle = {
    wheels: 4,
    engine: function()
    {
        return "vrroooooom!";
    }
};
const truck = Object.create(vehicle);
truck.doors =2;
console.log(truck);
console.log(truck.wheels); //inheratance
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors=4;
car.engine = function(){
    return "whoooosh!";
};
console.log(car.engine());
console.log(car.wheels);
const tesla = Object.create(car);//fixed
console.log(tesla.engine());
tesla.engine = function(){
    return "shshshshshshhhh...";
};
console.log(tesla.engine());

// object
//key-valuepairs in curly braces
const band = {
    vacals: "Robert Mugisha",
    guitar : "Jimmy Ishimwe",
    bass :"John Paul Jones",
    drums:"john Bonhma"
};

// delete band.drums;
// console.log(band.hasOwnProperty(drums));

console.log(Object.keys(band));
console.log(Object.values(band));
 
for (let job in band){
    console.log(band[job]);
}
// destructuring object

const{ vocals, guitar, bass , drums} = band;
console.log(band)
console.log(vocals);

function sings({vocals}) {
return `${vocals} sings!';
};
console.log(sings(band));
