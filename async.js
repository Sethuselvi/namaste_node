const fs = require('fs');
const https = require('https');
console.log("Hello World");
var a = 1078698;
var b= 20986;
//Synchronous
fs.readFileSync('file.txt','utf-8');
 console.log('This will only execute only after file read');

https.get('https://dummyjson.com/products/1', (res) => {
    console.log('Fetched data successfully');
});

setTimeout(()=>{
    console.log('setTimeout called after 5 seconds')
},5000);


//Asynchronous
fs.readFile('file.txt','utf-8',(err,data)=>{
 console.log('File data:',data);
})

function multiplyFn(x,y){
    const result = a*b;
    return result;
}
var c =multiplyFn(a,b);
console.log("Multiplication result is:",c);