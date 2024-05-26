// what is a Function : 
//-  A JavaScript function is a block of code designed to perform a particular task.
//-  A JavaScript function is executed when "something" invokes it (calls it).

// Type of Function :
// 1) Name Function 
        // - without arg and without rtn type 
        // - with arg and without rtn type 
        // - without arg and with rtn type 
        // - with arg and with rtn type 

// 2) Expression Function
        // - without arg and without rtn type 
        // - with arg and without rtn type 
        // - without arg and with rtn type 
        // - with arg and with rtn type 

// 3) Arrow Function
        // - without arg and without rtn type 
        // - with arg and without rtn type 
        // - without arg and with rtn type 
        // - with arg and with rtn type 

// 4) Anonymous Function
// 5) IIFE Function
// 6) Generator Function
// 7) callback function
// 8) recurssion Function
// 9) Higherorder Function
// 10)getter setter Function (OO)
//////////////////////////////////////////////////
/*
//Function Declaration/Initialization
function function_name(){
    code;
}

function call
function_name();
*/

// 1)Name Function
// 1) without arg and without rtn type
function Hello(){
    console.log("Hello Everyone,Welcome to JS World 🤩!!");
}

// Hello();//function calling (invoke)

// 2) with arg and without rtn type;

function Addition(n1,n2){ // perameter
    console.log("Addition is : ",n1+n2);
    console.log(typeof n1);
    console.log(typeof n2);
}
// Addition(12,"Zafar"); // argument 13,12


//3) without arg and with rtn type 
function giveMe_Somthing(){
    return "Hello Everyone,Welcome to JS World 🤩!!";
}
// console.log(giveMe_Somthing());
var ans = giveMe_Somthing();
// console.log(ans);

// 4) with arg and with rtn type
function Result(n1){
    if(n1>33)
    {
        return "You are pass🎊.give me Party😋.";
    }
    else
    {
        return "You are Fail😥.Better Luck Next Time😉."
    }
}
const output  = Result(22);
console.log(output + "ASDFG");
// console.log(output);

////////////////////////////////////////////////////////////////////////
// 1) wap to check given input is Pelindrome or not. (using with arg and without rtn type) (string/number)
// 2) wap to check given number is Perfect or Not. (using with arg and with rtn type) 