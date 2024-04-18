//string : collection of multiple char 
// like as an Array
// index 

// var str1 = "Royal tecnosoft p ltd.";
// console.log(str1);


// console.table(str1);

// string similer Array  but not same 

// console.log(str1[0]);

// console.log(str1.length);
//                 //index
// console.log(str1[str1.length-1]);

// always length start : 1 number
// always index start : 0 number 
// that means  last index = length-1
///////////////////////////////////////////////////////////////
var str1 = "Royal  tecnosoft p ltd.";
console.log(str1);
// str1.charAt
                //index
// console.log(str1.charAt(21));
////////////////////////////////////////////
// str1.charCodeAt

// console.log(str1.charCodeAt(0));

// if(str1.charCodeAt(0)>=65 && str1.charCodeAt(0)<=90)
// {
//     console.log("Valid");
// }

// if(str1.charAt(0)>='A' && str1.charAt(0)<='Z')
// {
//     console.log("Valid");
// }
///////////////////////////////////////
// str1.codePointAt
// console.log(str1.codePointAt(30));

///////////////////////////////////////
// str1.concat
// var str2 = "Zafar";
// console.log(str1.concat(str2));
// console.log(str1+str2);

//////////////////////////////////////
// str1.endsWith
// .   ?
// if(str1.endsWith('  '))
// {
//     console.log("done");
// }
////////////////////////////////////
// str1.includes

// console.log(str1.includes("p l"));
/////////////////////////////////////
// str1.indexOf
console.log(str1.indexOf('o'));
////////////////////////////////////
// str1.lastIndexOf
console.log(str1.lastIndexOf('o'));
//////////////////////////////////
// str1.length
///////////////////////////////////
// str1.replace
// console.log(str1.replace('o','O'));
// console.log(str1.replaceAll('o','O'));
//////////////////////////////////
// str1.split
// var ans = str1.split(' ');
// console.log(ans.length-1);
/////////////////////////////////////
// str1.startsWith
// console.log(str1.startsWith('R'));
///////////////////////////////

// str1.toLowerCase
console.log(str1.toLowerCase());
///////////////////////////////
// str1.toUpperCase
// console.log(str1.toUpperCase());
///////////////////////////////////

 // str1.trim
// str1.trimStart
// str1.trimEnd
// str1.valueOf
// str1.slice
// str1.substring
// str1.substr 
