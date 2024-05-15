// - Iterate objects.
// var myobj = {
//     fname : "Raj",
//     lname : "Shah",
//     Age : 12
// }
// console.log(myobj);

// for(basic),while loop,for of loop   index 
// foreach Array
// var str = "";
// for in loop : 
// for (const key in myobj) {
//     // console.log(key,myobj[key]);
//     str=str + key +" "+ myobj[key]+ ",";
// }
// console.log(str);
/////////////////////////////////////////
// - Computed properties.  []
// var key1 = "fname";
// var key2 = "lname";

// var value1 = "Raj";
// var value2 = "Patel";

// var obj = {
//     [key1] : value1,
//     key2 : value2
// }
// console.log(obj);
/////////////////////////////////
// - Spread operator in objects.
// var myobj = {
//     fname : "Raj",
//     lname : "Shah",
//     Age : 12
// };

// console.log(myobj);
// var myobj2 = myobj;
// console.log(myobj2);

// myobj2.Gender = "Male";
// console.log(myobj);
// console.log(myobj2);


// console.log(myobj);
// var myobj2 = {...myobj};
// console.log(myobj2);
// myobj.Age = 100;
// myobj2.Gender = "Male";
// console.log(myobj);
// console.log(myobj2);

//////////////////////////////////////
// - Object Destructuring.
// var myobj = {
//     fname : "Raj",
//     lname : "Shah",
//     Age : 12,
//     Gender : "Male"
// };
// console.log(myobj);
// // console.log(myobj.Gender);

// var {Gender:g1,fname,...newobj} = myobj;
// console.log(g1,fname,newobj);
// console.log(newobj);

///////////////////////////////////////
// - Objects inside Array.
// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];

// for (let i = 0; i < library.length; i++) {
//     console.log(library[i]);
// };

// console.log(...library);
///////////////////////////////////
// - Nested Destructuring.

// var myobj = {
//     fname : "Raj",
//     lname : "Shah",
//     Age : 12,
//     Gender : "Male",
//     Address : {
//         city : "GNR",
//         state : "Guj",
//         Nation : "IND"
//     }
// };
// // console.log(myobj);
// // console.log(myobj.Address);
// // console.log(myobj.Address.state);

// var {Address:{city}} = myobj;

// // console.log(Address);
// console.log(city);