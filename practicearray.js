// array is special variable that can hold more than one variable

//types of array declaration 
//array literal syntax (preferred) & array constructor 

// array lieral
 const mixed = [1,"hello",true];
 mixed.push("Aline")
 mixed.pop()
 mixed.shift()
 mixed.unshift("Aline",false)
 mixed.splice(1,0,'Uwababyeyi')
 mixed.splice(3,0,"hii")
 //searching  and indexing 
console.log(mixed.indexOf ('Uwababyeyi'))// indexOf
console.log(mixed.indexOf('hii'))
console.log(mixed.indexOf('Alice'))
 console.log(mixed);
//lastindexOf()
const number = [1,"Alice",true,8,"Aline",3,"Mugisha","Alice"]
const number1 = number.find(x=> x >2)//find
console.log(number1)
console.log(number.lastIndexOf('Alice'))


//include()
console.log(number.includes('Mugisha'))
console.log(number.includes('Allen'))

//find()

const arr = [1, 2, 7,10];
const result = arr.find(x => x > 4);
// const result1 = arr.findIndex(x=> x >5)
// console.log(result1);
console.log(result); 

//find index
let arr12 = [1,3,5,7,8,20]
const index = arr.findIndex(x => x  > 5)
console.log(index)
// at() access element by index 
let arr3 = ['a','b','c','d']
console.log(arr3.at(0))
console.log(arr3.at(3))
arr3.reverse();
console.log(arr3)


//join() combine all element into single string 
const join1 = ['fire','air']
console.log(join1.join('-'))
const tttt = ['rwanda','air']
console.log (tttt.join(''))
//reverse()
join1.reverse();
console.log(join1)
//sort
const join11 = [20,3,14,,5]
join11.sort();
join11.sort((a,b)=> a-b);
console.log(join11)

//concate()
const arrr = ['Aline']
const arr44 = ['bebe']
const merged = arrr.concat(arr44)
console.log(merged)

//slice
const somearr = [1,2,3,4,9,5,7];
const part = somearr.slice(1,4)
console.log(part)
console.log(somearr)


//flat() nested array inti one dimensional 
const somearr1 = [1,[2,3,[4[9],5]],7];
console.log(arr.flat());


//function iterationmodel 
const somearr2 = [1,2,3,4,9,5,7];
somearr2.forEach(x => console.log(x*2));

//map()return new array after transforming each element 
const somearr3 = [1,2,3,4,9,5,7];
const doublearr = somearr3.map(x => x * 2)
console.log(doublearr);

//filter() return a new arry with only elements that pass condition 
const arr5 = [1, 2, 3];
const filtered = arr5.filter(x => x > 1);
console.log(filtered); 

//reduce() reduce arrayto one value
const arr6 = [1, 2, 3];
const sum = arr6.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


// some() return true if at least one element satisifies a condition 
const arr7 = [1, 5];
console.log(arr7.some(x => x > 4)); 

//every() return true if all elements satisfy a condition 

const arr8 = [1, 5];
console.log(arr8.every(x => x > 4)); // false → 1 is not > 4
console.log(arr8.every(x => x > 0));

 //array constructor 
//  var weekDays = newArray(7)
//  console.log(weekDays)

 //memory model (crucial concept)
 //it is vital to understand how arrays are stored in memort to avoid bugs
 //primitive variable : store actual value 
 //reference variable:an array variablr does not store data itself


//searching and indexing 

