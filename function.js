//function is a reusable block of code that does a specific job.
// function write once , give it a name , call it whenever we need it 
 // why need function 
 //1. avoid repeating of code 2. organise the code 3. make code easier to read 4. fix bugs in one place 5. build real website & systems 
   // syntax of function 
   function myfunctionName(){
    return("hello Aline");
   }
   console.log(myfunctionName());

   //example2 
   function greet(){
    return("Hello word");
   }
   console.log(greet());

   // function to find the sum of two number 
   function sum(a,b){
    return(a+b);
    
   }
   console.log(4 + 4);

   //Function with parameter 
   function greetUser(name){
    return("hello" + name);
   }
   greetUser("Yvette");
   greetUser("Alex");
   console.log(greetUser("yvette"));
   console.log(greetUser("Alex"));


   //function with multiple parameter 
   function addNumber(a,b){
    return(a + b);
   }
   console.log(addNumber(5,3));

   // return statement (very important concept )

   function add(a,b){
    return(a+b);

   }
   let result = add(2,5);
   console.log(result);
   //
// function expression 

function greet(){
    return("welcome Aline")
};
console.log(greet());


// arrow function  Mordern java script 

const greet = () => {
    console.log("Hiii Aline")
};

// with parameter 
const greet = (a,b)=> {
    console.log()
}


