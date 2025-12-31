//File content execution
const fs = require("fs");
setImmediate(()=>{console.log('Set Immediate')});
setTimeout(()=>{console.log("Time expired")},0);
Promise.resolve("Promise").then(console.log);
fs.readFile('file.txt','utf-8',()=>{
  setTimeout(()=>{console.log("2nd Timer")},0);
  process.nextTick(()=>{console.log("2nd next tick")});
  setImmediate(()=>{console.log('2nd Set Immediate')});
  console.log("File Reading CB");
})

process.nextTick(()=>{console.log("nextTick")});
console.log("Last line of the file");