const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let nums = input[1].split(" ").map((v) => Number(v));
let calculator = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => parseInt(a / b),
];
let operator = input[2].split(" ").map((v) => Number(v));
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
function dfs(count, start) {
  if (count === n - 1) {
    max = Math.max(max, start);
    min = Math.min(min, start);
    return;
  } else {
    for (let i = 0; i < operator.length; i++) {
      if (operator[i] === 0) continue;
      operator[i]--;
      dfs(count + 1, calculator[i](start, nums[count + 1]));
      operator[i]++;
    }
  }
}
dfs(0, nums[0]);
console.log(max ? max : 0);
console.log(min ? min : 0);
