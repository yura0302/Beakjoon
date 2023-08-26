const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let n = input[0];
// let answer = "";
n = n.replace(/XXXX/g, "AAAA");
n = n.replace(/XX/g, "BB");
console.log(n.split("").includes("X") ? -1 : n);
