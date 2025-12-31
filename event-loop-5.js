//Nested promise
const fs = require("fs");
setImmediate(()=>{console.log('Set Immediate')});
setTimeout(()=>{console.log("Timer expired")},0);
Promise.resolve("Promise").then(console.log);
fs.readFile('file.txt','utf-8',()=>{
  console.log("File Reading CB");
})
process.nextTick(()=>{
    process.nextTick(()=>{console.log("inner nextTick")}
);
    Promise.resolve("Outer Promise").then(console.log);
    console.log("nextTick")});

console.log("Last line of the file");