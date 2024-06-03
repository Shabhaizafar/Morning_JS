//Anonymous Function 
// document.querySelector('button').onclick = function (){
//     console.log("Hello");
// }

// IIFE Function  : 
// Immidiatly Invoked Function Expression

// (function (){
//     console.log("Hello");
// })();

// (function (n1,n2){
//     console.log(n1+n2);
// })(12,13)


//////////////////////////////////
// Basic IIFE Syntax: Write a simple IIFE that logs "Hello, World!" to the console.
// ( 
// function (){
//     console.log("Hello World!!");
// })();
///////////////////
// Returning Values: Create an IIFE that returns a string "IIFE in JavaScript" and logs the result to the console.
// console.log(
//     (
//         function(){
//             return "IIFE in JavaScript";
//         }
//     )()
// );

//////////////////////
// Parameter Passing: Write an IIFE that takes two numbers as parameters and returns their sum.
// (function (n1,n2){
//     console.log(n1+n2);
// })(12,13)
//////////////////////////
// Variable Scope: Demonstrate how variables inside an IIFE do not affect the global scope by declaring a variable with the same name inside and outside an IIFE.
// var n1 = 12;
// console.log("N1 Before : ",n1);
// (
//     function(){
//         n1 = 13;
//         console.log("N1 Inner :",n1);
//     }
// )();
// function Hello()
// {
//         n1 = 13;
//         console.log("N1 Inner :",n1);
// }
// Hello();
// console.log("N1 After : ",n1);

////////////////////////////////////////
// Private Methods: Create an IIFE that has a private function and demonstrate how it cannot be accessed from outside the IIFE.
// (
//     function (){
//         // console.log(n1);
//         var n =()=>{
//             var n1 = 12;
//             console.log("Hello");
//         }
//         n();
//         console.log(n1);
//     }
// )();
// n();
// console.log(n1);

//////////////////////////
