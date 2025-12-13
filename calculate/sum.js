console.log("Sum module executed");

var x = "Hello World"; 
function calculateSum(a,b){
    const sum =a+b;
    console.log(sum);
}

// console.log(module.exports);
// module.exports.x = x;
// module.exports.calculateSum = calculateSum;
// console.log(module.exports)

module.exports = {x ,calculateSum};

