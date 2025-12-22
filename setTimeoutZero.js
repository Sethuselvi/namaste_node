console.log("Hello World");
var a = 1078698;
var b= 20986;

//It will only be called once call stack of main thread is empty
//Trust issues with set timeout
setTimeout(()=>{
    console.log('Call me right now!!!')
},0);
setTimeout(()=>{
    console.log('Call me after 3 seconds')
},3000);


function multiplyFn(x,y){
    const result = a*b;
    return result;
}
var c =multiplyFn(a,b);
console.log("Multiplication result is:",c);