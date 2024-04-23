// 1. Write a JavaScript function to check whether an 'input' is a string or not.
var str = [1,2,3,4,4];
// if(typeof(str)=='string')
// {
//     console.log("true");
// }
// else
// {
//     console.log("false");
// }
//2. Write a JavaScript function to check whether a string is blank or not.
// 3. Write a JavaScript function to split a string and convert it into an array of words. (split)
// 4. Write a JavaScript function to extract a specified number of characters from a string.
// Write a JavaScript function to convert a string into abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

// var str = "Robin Singh";
// var Arr = str.split(' ');
// for (let i = 0; i <Arr.length; i++) {
//     if(i>0)
//     {
//         var a = Arr[i][0]+".";
//        Arr.push(Arr[i].replace(Arr[i],a));
//     }
// }
// console.log(Arr.join(' '));

///////////////////////////////////////////////////
// 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// // "robin...@example.com"
// var str = "jay@gmail.com";
// var Arr = str.split('@');
// var Final = "";

// for (let i = 0; i < Arr[0].length; i++) {
//     if(i<parseInt(Arr[0].length/2))    
//     {
//         Final+=Arr[0][i];
//     }
//     else
//     {
//         Final += ".";
//     }
// }
// Final= Final+"@"+Arr[1];
// console.log(Final);
///////////////////////////
// 7. Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

// var str = "Robin Singh from USA.";

// console.log(str.toLowerCase().split(' ').join('-').substring(0,str.length-1));
/////////////////////////////////////////////////////
// 8. Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

// 9. Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

// var str = "js string exercises";
// var Arr = str.split(' ');

// for (let i = 0; i < Arr.length; i++) {
//     Arr[i]=Arr[i][0].toUpperCase()+Arr[i].slice(1);
// }
// console.log(Arr.join(' '));
