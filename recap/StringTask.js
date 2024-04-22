// 1. Write a JavaScript function to check whether an 'input' is a string or not.
//2. Write a JavaScript function to check whether a string is blank or not.
// 3. Write a JavaScript function to split a string and convert it into an array of words. (split)
// 4. Write a JavaScript function to extract a specified number of characters from a string.
// Write a JavaScript function to convert a string into abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

var str = "Robin Singh";
var Arr = str.split(' ');
for (let i = 0; i <Arr.length; i++) {
    if(i>0)
    {
        var a = Arr[i][0]+".";
       Arr.push(Arr[i].replace(Arr[i],a));
    }
}
// console.log(Arr.join(' '));