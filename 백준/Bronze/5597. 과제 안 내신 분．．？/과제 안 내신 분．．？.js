const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = input.map(Number);

let n = [];
for (let i = 1; i <= 30; i++) {
  if (!arr.includes(i)) {
    n.push(i);
  } else continue;
}
console.log(n.join("\n"));
