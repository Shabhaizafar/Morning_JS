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
// //////////////////////////////////////////////////////////////////////////
// 10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"
// var str = "AaBbc";
// var convert = "";

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i],str[i].charCodeAt());
//     if(str[i].charCodeAt()>=65 && str[i].charCodeAt()<=90)
//     {
//         convert+=str[i].toLowerCase();
//     }
//     else if(str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122)
//     {
//         convert+=str[i].toUpperCase();
//     }
//     else{
//         convert+=str[i];
//     }
// }
// console.log(convert);

/////////////////////////////////////
// 11. Write a JavaScript function to convert a string into camel case.
 //ex 9
/////////////////////////////////
// 12. Write a JavaScript function to uncommelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

// var str = "helloWorld";
// var value = "_";
// var uncamelize = "";

// for (let i = 0; i < str.length; i++) {
//     if(str[i].charCodeAt()>=65 && str[i].charCodeAt()<=90)
//     {
//         if(value)
//         {
//             uncamelize+=value;
//         }
//         else
//         {
//             uncamelize+=" ";

//         }
//         uncamelize+=str[i].toLowerCase();
//     }
//         else if(str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122)
//     {
//         uncamelize+=str[i];
//     }   
// }
// console.log(uncamelize);
////////////////////////////////
// 13. Write a JavaScript function to concatenate a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

// var str = "Ha!";
// var value = 5;
// var final = "";

// for (let i = 0; i <value; i++) {
//     final+=str;
// }
// console.log(final);

//////////////////////////////////////
// 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."

var str = "We are doing some exercises.";
var insert = "";
var positon = 0;
console.log(str);
var Arr = str.split('');
console.log(Arr);


for (let i = 0; i < Arr.length; i++) {
    if(i==positon)
    {
        console.log(Arr[i]);
    }
}