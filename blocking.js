const crypto = require('crypto');
console.log("Hello World");
var a = 1078698;
var b= 20986;
//pbkfd2 -password based key derivative Function

//Synchronous function will block the main thread.Don't use it.
crypto.pbkdf2Sync('password','salt',500000,50,'sha512')
    console.log('First key generarted');

crypto.pbkdf2('password','salt',5000000,50,'sha512',(err,key)=>{
    console.log('Second key generarted');
})

function multiplyFn(x,y){
    const result = a*b;
    return result;
}
var c =multiplyFn(a,b);
console.log("Multiplication result is:",c);