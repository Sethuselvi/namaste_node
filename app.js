const obj = require('./sum.js')
require('./xyz.js')
var name = "Namaste Nodejs";
var a= 10;
var b=20;
console.log(name);
console.log(a+b);
obj.calculateSum(a,b);
console.log(obj.x);
// console.log(global);
// console.log(this);
// console.log(globalThis===global);

