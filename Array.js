// - Intro to arrays.
    // Array is a Coolection of Multiple Values with Different Data type
    // []

// var Arr = [1,2,3,4];
// var Arr2 = ["Zafar","Za"];
// var Arr3 = [1,2,"Zafar"];
// var Arr4  = "Zafar";
// console.log(Arr);
// console.log(Arr2);
// console.log(Arr3);
// console.log(Arr4);

// console.log(Array.isArray(Arr));
// console.log(Array.isArray(Arr2));
// console.log(Array.isArray(Arr3));
// console.log(Array.isArray(Arr4));


//length   1 2 3 4 5
// var Arr = [1,2,3,4,5,7];
// //index    0 1 2 3 4


// console.log(Arr);
// console.log(Arr[2]);
// console.log(Arr[4]);
// console.log(Arr[Arr.length-1]);

//////////////////////////////////////////////
// - Push pop shift unshift.

// var Arr = [1,2,3,4,5,6,7,8];
// 1) Arr.push()  : Add a new Element in an Array   (Last index)
// Arr.push(100);
// Arr.push(100,200,300);
// console.log(Arr)
/////////////////////////////
// 2)Arr.pop()   : Remove an Element Value (Last Index)
// Arr.pop();
// Arr.pop();
// console.log(Arr);
///////////////////////////
// 3)Arr.shift() : Remove an Element Value (Starting Index)
// Arr.shift();
// Arr.shift();
// console.log(Arr);

////////////////////////////////////////
// 4)Arr.unshift() : Add a new Element in an Array  (Starting Index)
// Arr.unshift(100);
// Arr.unshift(100,300,400);
// console.log(Arr);

///////////////////////////////
// - Primitive vs reference data types.

// var n1 = 12;
// var n2 = n1;

// console.log("Value of N1 : ",n1);//12
// console.log("Value of N2 : ",n2);//12

// n1++;

// console.log("Value of N1 after inc : ",n1);//13
// console.log("Value of N2 after inc : ",n2);//12

// var Arr1 = [1,2,3];
// var Arr2 = Arr1;

// console.log("Values of Array 1 : ",Arr1);
// console.log("Values of Array 2 : ",Arr2);

// Arr1.push(100);
// Arr2.shift();
// console.log("Values of Array 1 after pushing : ",Arr1);
// console.log("Values of Array 2  after pushing: ",Arr2);


///////////////////////////////////////



