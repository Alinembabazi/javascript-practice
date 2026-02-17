let userAges = [18, 24, 33, 16, 40];
let hasMinor = userAges.some(function(age)
{
return age< 18 
});
console.log( hasMinor)
console.log(userAges.every(function(age){
    return age > 18
}))
console.log(userAges.some(function(age){
    return age % 5==0 
}))

