// syntax error:
// logical error
// run time error
// Exception is an error that occur at runtime 
// due to illegeal operation during execution

// try 
// catch
// throw 
// finally

// try - lets you to check a block of code
// catch - lets you to handle the error
// throw - lets you to create custom error message
// finally - lets you to execute code after try and catch regardless of the result

// syntax:
// try{
//     block of the code
// }
// catch(err){
//     // throw()
//     block of the code handle the error
// }

// finally{

//     block of the code
    
// }


// ES6

// Var vs. Let/Const:
// Arrow Functions:
// Template Literals: ${}
// Default Parameters:
// Classes:
// Modules:
// Promises:

// function divide(a,b){
//     try{
//         if(b==0){
//             throw new Error("cannot div by zero")
//         }
//         let result=a/b
//         console.log("the result is :",result)
//     }
//     catch(error){
//         console.log("ERROR  :",error.message)

//     }

//     finally{
//         console.log("process complete")
//     }
// }

// divide(10,0)

//  wp eligible for vote => function ,exphand


// let numbers=[1,2,3,4,5]
// let sq=numbers.map(function(num){
//     return num*num
// })

// console.log(sq)

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(num) {
  return num % 2 !== 0;  
});

console.log(evenNumbers); 






















