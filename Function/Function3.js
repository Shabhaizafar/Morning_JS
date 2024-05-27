// 2) Arrow Function

// 1) without arg and without rtn type
// var Hello =  ()=>{
//     console.log("Hello Everyone,Welcome to JS World 🤩!!");
// }

// Hello();//function calling (invoke)

// 2) with arg and without rtn type;

var Addition =  (n1,n2)=>{ // perameter
    console.log("Addition is : ",n1+n2);
    console.log(typeof n1);
    console.log(typeof n2);
}
// Addition(12,"Zafar"); // argument 13,12


//3) without arg and with rtn type 
var giveMe_Somthing =  ()=>{
    return "Hello Everyone,Welcome to JS World 🤩!!";
}
// console.log(giveMe_Somthing());
var ans = giveMe_Somthing();
// console.log(ans);

// 4) with arg and with rtn type
var Result = (n1)=>{
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
// console.log(output);

// var addition = n1 =>console.log(typeof n1);

// var Addition =  n1 =>return typeof n1;   //invalid 

// var Addition =  n1,n2 =>console.log(typeof n2); 


// Addition(12); // argument 13,12  //invalid