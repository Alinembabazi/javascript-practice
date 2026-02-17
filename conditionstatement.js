
function checkAge(age){
// let age =15;
if (age>=18){
    return("Adult")
}
else{
    return("young")
}}
console.log(checkAge(15));

// switch case 
function dayOfTheweek(){

let day = "day";
switch (day){
    case "Monday":
return ("Start of the week");
break;
switch (day){
    case "tuesday":
return ("2");
break;
switch (day){
    case "Wenesday":
return ("3");
break;
default:
    return("Another day");

}}}}
console.log (dayOfTheweek());
// for loop 

// let i;
for (i=1; i<=5 ; i++){
    console.log(i);
}
//while loop 
let count =2;
while (count <=10){
    console.log(count)
    count++;
}
// continue and break 
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
console.log(i);
}

// continue 
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
