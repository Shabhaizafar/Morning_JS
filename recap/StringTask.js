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

// var str = "We are doing some exercises.";
// var str2 = "Zafar";
// var insert = "";
// var positon =12;
// console.log(str);
// var Arr = str.split('');
// console.log(Arr);
// for (let i = 0; i < Arr.length; i++) {
//     if(i==positon)
//     {
//         if(positon==0 || Arr[i-1]==" ")
//         {
//             insert=insert+str2+" ";
//         }
//         if(Arr[i+1]==" " || positon==Arr.length-1)
//         {
//             insert=insert+" "+str2;
//         }
//         else
//         {
//             insert=insert+" "+str2 +" ";
//         }
//         insert+=Arr[i];
//     }
//     else
//     {
//         insert+=Arr[i];
//     }
// }
// if(Arr.length < positon)
// {
//     insert+=str2;
// }
// console.log(insert);

// var str = "We are doing some exercises.";
// var insert  = "    JS ";
// var position = 10;


// var final = str.slice(0,position)+insert+str.slice(position);
// // str.slice(0,position)

// console.log(final);

/////////////////////////////////////
// 15. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.
// Test Data :
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"

// var n1 = 10243;
// var Arr = ['st','nd','rd','th'];

// if(String(n1)[String(n1).length-1]==1)
// {
//     console.log(n1+"st");
// }
// else if(String(n1)[String(n1).length-1]==2)
// {
//     console.log(n1+'nd');
// }
// else if(String(n1)[String(n1).length-1]==3)
// {
//     console.log(n1+'rd');
// }
// else{
//     console.log(n1+'th');
// }
// /////////////////////////////////////////////////////////////
// 17. Write a JavaScript function to chop a string into chunks of a given length.
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

// var str  = "w3resource";
// var n1 = 2;
// var Arr = [];

// for (let i = 0; i < str.length; ) {
//     if(n1!=0)
//     {
//         Arr.push(str.substr(i,n1));
//         i+=n1;
//     }
//     else
//     {
//         Arr.push(str);
//         i+=str.length;
//     }
// }

// console.log(Arr);

/////////////////////////////////////////////
// 18. Write a JavaScript function to count substrings in a string.
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1


// var str = "The quick brown fox thejumps over the lazy dog".toLowerCase();
// var check = "the".toLowerCase();
// var Arr = str.split(check);
// console.log(Arr.length-1);


//////////////////////////

// 19. Write a JavaScript function that takes a positive integer and reverses the binary representation of that integer. Finally return the decimal version of the binary string.
// Test Data :
// (100) -> 19
// Explanation:
// Binary representation of 100 is 1100100
// Reverse of 1100100 is 10011
// Decimal form of 10011 is 19
// (1134) -> 945
// Explanation:
// Binary representation of 1134 is 10001101110
// Reverse of 10001101110 is 1110110001
// Decimal form of 1110110001 is 945




// 19 -> 100  -> 1100100 -> 0010011 -> 10011 -> 


// 1 to 15  0000 - 1111 

//11  

        //  2   11      1
        //  2    5      1
        //  2    2      0
        //       1


// //decimal to binary 
// var n1 = 1134;
// var binary = "";

// while(n1>=1)
// {
//     binary+=n1%2;
//     n1 = parseInt(n1/2);
// }
// console.log(binary.split('').reverse().join(''));

// // binary to decimal 

// var decimal = 0;

// for (let i = 0; i < binary.length; i++) {
//         decimal+=binary[i]*Math.pow(2,binary.length-i-1);
// }
// console.log(decimal);


// 1    * 2^(str.length-i-1)   = 2^3 = 8
// 0    * 2^(str.length-i-1)   = 2^2 = 0
// 1    * 2^(str.length-i-1)   = 2^1 = 2
// 1    * 2^(str.length-i-1)   = 2^0  = 1


////////////////////////////////////////
//n = octal

///////////////////////////////
// 20. Write a JavaScript function that can pad (left, right) a string to get to a specific length.
// Test Data :
// console.log(formatted_string('0000',123,'l'));
// console.log(formatted_string('00000000',123,''));
// Output :
// "0123"
// "12300000"

// var format= '000000000';
// var num = String(123);
// var Arr = num.split('');
// var dif;

// var order = 'l';
// if(order)
// {
//         if(format.length>num.length)
//         {
//                 dif = format.length - num.length;
//                 for (let i = 0; i < dif; i++) {
//                         Arr.unshift(0);                
//                 }
//                 console.log(Arr.join(''));
//         }
// }
// else
// {

// }

////////////////////////////////////////////////////////////////////////////

// Write a JavaScript function to repeat a string for a specified time.
// Test Data :
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output :
// "aaaa"
// "Error in string or count."

// var str = 'a';
// var timer = 10;
// var ans = ""

// for (let i = 0; i <timer; i++) {
//         ans+=str;
// }
// if(timer!=0)
// {
//         console.log(ans);
// }
// else
// {
//         console.log("Error in string or count.");
// }

// ////////////////////////////////////////////;

// 22. Write a JavaScript function to get a part of a string after a specified character.
// Test Data :
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
// Output :
// "w3resource"
// "xercises"
// var str = "w3resource: JavaScript Exercises";
// var char = prompt("String is :\nw3resource: JavaScript Exercises\n\nEnter a Char : ");
// var choice = prompt("a for Left Side\nb for right Side\n\nEnter your Choice : ");

// switch (choice) {
//         case 'a':
//                 console.log(str.slice(0,str.indexOf(char)));
//                 break;
//         case 'b':
//                 console.log(str.slice(str.indexOf(char)+1));
//                 break;
//         default:
//                 console.log(str);
//                 break;
// }
//////////////////////////////
// 23. Write a JavaScript function to strip leading and trailing spaces from a string.
// Test Data :
// console.log(strip('w3resource '));
// console.log(strip(' w3resource'));
// console.log(strip(' w3resource '));
// Output :
// "w3resource"
// "w3resource"
// "w3resource"
//////////////////////////////////
// 24. Write a JavaScript function to truncate a string to a certain number of words.
// Test Data :
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// Output :
// "The quick brown fox"
//////////////////////////////////////
