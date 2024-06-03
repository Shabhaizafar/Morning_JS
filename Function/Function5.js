// // Generator Function 
// /*
// valid 
// function *functionName(){
//     code;
// }

// function* functionName(){
//     code;
// }

// function*functionName(){

// }
// */
// function *Values(){
//     yield 11,
//     yield 12,
//     yield 13,
//     yield 14,
//     yield 15
// }

// var ANS = Values();
// // console.log(ANS.next().value);
// // console.log(ANS.next().value);
// // console.log(ANS.next().value);
// // console.log(ANS.next().value);
// // console.log(ANS.next().value);
// // console.log(ANS.next().value);
// console.log(ANS.next());
// console.log(ANS.next());
// console.log(ANS.next());
// console.log(ANS.next());
// console.log(ANS.next());
// console.log(ANS.next());

// /////////////////////////////////////////
// Basic Generator Functions
// Simple Generator Function

// Write a generator function simpleGenerator that yields numbers from 1 to 5.
// for (let i = 1; i <=5; i++) {
//     function*Gen(){
//         yield i;
//     }
//     var temp = Gen();
//     console.log(temp.next().value);
// }
// --------------------------------------
// Range Generator

// Create a generator function rangeGenerator(start, end) that yields numbers from start to end.
function newOne(n1,n2){
    for (let i = n1; i <=n2; i++) {
        console.log(i);
    }
}

function *Gen(start,end){
    yield newOne(start,end)
}
var temp = Gen(11,20);
console.log(temp.next());
console.log(temp.next());

// --------------------------------------
// Infinite Sequence

// Implement a generator function infiniteSequence that generates an infinite sequence of numbers starting from 0.
// --------------------------------------
// Intermediate Generator Functions
// Fibonacci Sequence

// Write a generator function fibonacci that generates the Fibonacci sequence.
// --------------------------------------
// Iterating an Array

// Create a generator function arrayIterator(arr) that iterates over the elements of an array arr.
// --------------------------------------
// Yielding Object Properties

// Implement a generator function objectProperties(obj) that yields all the property values of an object obj.
// --------------------------------------
// Advanced Generator Functions
// Prime Number Generator

// Write a generator function primeGenerator that yields prime numbers indefinitely.
// --------------------------------------
// Pausing and Resuming Execution

// Create a generator function pauseAndResume that demonstrates pausing and resuming execution by yielding a value, waiting for an external input, and then continuing.
// --------------------------------------
// Nested Generators

// Implement nested generator functions where one generator yields values from another generator.
// --------------------------------------
// Real-World Applications
// Async Data Fetching

// Create an async generator function fetchData that fetches data from an API and yields the data in chunks.
// --------------------------------------
// Pagination

// Write a generator function paginate that simulates pagination by yielding a set of items from a list in batches of a given size.
// --------------------------------------
// Event Listener

// Implement a generator function eventListenerGenerator that listens for DOM events and yields the event objects as they occur.
// --------------------------------------
// Practical Implementation Examples
// File Reading

// Create a generator function readFileLines that reads a file line by line and yields each line. Use Node.js file system module for this task.
// --------------------------------------
// Tree Traversal

// Write a generator function treeTraversal that performs an in-order traversal of a binary tree and yields each node.
// --------------------------------------
// Flattening Arrays

// Implement a generator function flattenArray that takes a nested array and yields each element in a flattened manner.
// --------------------------------------
// Testing and Debugging
// Debugging Generators

// Write tests for a generator function testGenerator that ensure it yields the expected values. Use assert statements to verify the correctness.
// --------------------------------------
// Error Handling in Generators

// Create a generator function errorHandlingGenerator that demonstrates how to handle errors within a generator.
// Combinations with Other JS Features
// --------------------------------------
// Combining Generators with Promises

// Implement a generator function promiseGenerator that works with Promises and yields resolved values of a series of Promises.
// --------------------------------------
// Generator as a Data Pipeline

// Create a series of generator functions that transform data in stages, demonstrating the concept of a data pipeline.
// --------------------------------------
// Interleaving Generators

// Write two generator functions that interleave their yields, and create a function interleave(g1, g2) that combines them in an alternating manner.
// --------------------------------------
