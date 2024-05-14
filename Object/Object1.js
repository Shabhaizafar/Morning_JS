// Intro to objects.
// Collection of Multiple Properties and Methods.
// Property : key + value
// no index based
// {}

// How to Create Empty Object : 
// var Person = {};
// console.log(Person,typeof Person);    


var Person = {
    //key    value        = property
    fname : "Raj",
    lname : "Patel"
}
console.log(Person);

//How to Access Full Object 
// console.log(Person); 


// How to Access Property Value 
// 1) Using Dot Notation  ( . )
// console.log(Person.fname);

// // 2) Using Bracket Notation ( [""]  / [''] / [``] )
// console.log(Person["lname"]);
// console.log(Person['lname']);
// console.log(Person[`lname`]);


// How to Change/Modify/Update Property Value
// 1) Using Dot Notation  ( . )
// Person.fname = "Ajay";
// console.log(Person);

// 2) Using Bracket Notation ( [""]  / [''] / [``] )
// Person['lname'] = "Shah";
// console.log(Person);


// How to Add New Property 
// 1) Using Dot Notation  ( . )
// Person.Gender = "Male";
// console.log(Person);
// 2) Using Bracket Notation ( [""]  / [''] / [``] )
// Person["Age"] = 12;
// console.log(Person);



// How to remove Property
// 1) Using Dot Notation  ( . )
// delete Person.fname;
// console.log(Person);

// 2) Using Bracket Notation ( [""]  / [''] / [``] )
// delete Person["lname"];
// console.log(Person);


// delete Person;  // not Valid Syntax 
// console.log(Person);

////////////////////////////////////////////////////////////////////////////////////////
for (const key in Person) {
//    console.log(key,Person.key);
    console.log(key,Person[key]);    
}

//////////////////////////////////////
/////////////////////////////////////////////////
// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

//////////////////////////

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
//////////////////////////////////

// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
///////////////////////////////////

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

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