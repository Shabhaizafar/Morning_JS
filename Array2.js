// - Clone array & spread operator.

// var Arr1 = [1,2,3];
// console.log(Arr1);


// 1) using concat
// var Arr2 = Arr1.concat(5,56,7);
// console.log(Arr2);

// Arr2.push("100");
// console.log(Arr1);
// console.log(Arr2);


// 2) using slice 
// var Arr2 = Arr1.slice(1,3);
// console.log(Arr2);
// Arr2.push("100");
// console.log(Arr1);
// console.log(Arr2);

// 3) using spread operator  (...)
// var Arr2 = [...Arr1];
// console.log(Arr2);
// Arr2.push("100");
// console.log(Arr1);
// console.log(Arr2);

// var Arr = [..."Zafar"];
// console.log(Arr);
// var Arr = [..."1234567890"];
// console.log(Arr);




///////////////////////////////////////
// var Arr = [1,2,3,4,5,6,7,8,9,0];
// - For loop.
// for (let i = 0; i < Arr.length; i++) {
//     console.log(i,Arr[i]);
// }
// - While loop in array.
// let i = 0;

// while (i<Arr.length) {
//     console.log(i,Arr[i]);
//     i++;
// }


// - For in loop.
// for (var i in Arr) {
//     console.log(i,Arr[i]);
// }

// - For of loop.
// for (const iterator of Arr) {
//     if(iterator>5){
//         console.log(iterator);
//     }
// }

/////////////////////////////////////////
// - use const for creating arrays.

// const Arr = [1,2,3,4];
// // const  Arr = Add1;    Add1 = [1,2,3,4];
// // console.log(Arr);

// // Arr.push("100");
// // console.log(Arr);   
// // Arr.pop();
// console.log(Arr);   


// delete Arr[0];
// console.log(Arr);   




/////////////////////////////////////////
// - Array destructuring.