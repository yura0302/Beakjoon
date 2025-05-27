let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// let input = fs.readFileSync("../input.txt").toString().trim().split(" ");

a = parseInt(input[0]);
b = parseInt(input[1]);
console.log(a / b);
