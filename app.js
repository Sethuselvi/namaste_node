// const {x,calculateSum} = require('./calculate/sum.js')
// const {calculateMultiply} = require('./calculate/multiply.js')
const {calculateSum,calculateMultiply} = require('./calculate')
require('./xyz.js')
const data = require('./data.json')
const util = require('node:util');
var name = "Namaste Nodejs";
var a= 10;
var b=20;
console.log(name);
console.log(a+b);
calculateSum(a,b);
calculateMultiply(a,b);
console.log(data);
console.log(util);
// console.log(x);
// console.log(global);
// console.log(this);
// console.log(globalThis===global);

