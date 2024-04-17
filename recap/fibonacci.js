//0,1,1,2,3,5,8,13......................

var n1 = 10;
var n2 = 1050; 
var a = 0;
var b = 1;
var c;
for (let i = 0; ; i++) {
        if(a>n2)
        {
            break;
        }
        else if(a>=n1)
        {
            console.log(a);
        }
        c = a+b;   
        a = b;
        b = c;
}