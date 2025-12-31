//Event loop inner phases execution
//Next tick and promise priority
const fs = require("fs");
const a = 100;
setImmediate(()=>{console.log('Set Immediate')});
Promise.resolve("Promise").then(console.log);
fs.readFile('file.txt','utf-8',()=>{
    console.log('File reading CB');
})
setTimeout(()=>{"Time expired"},0);
process.nextTick(()=>{console.log("Next Tick")});
function printA(){
    console.log("a=",a);
}
printA();
console.log("Last line of the file");