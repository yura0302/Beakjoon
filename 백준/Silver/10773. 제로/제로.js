const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const K = input.shift();
const arr = [...input].map(Number);
const num = [];

for (let i = 0; i < K; i++) {
  if (arr[i] !== 0) {
    num.push(arr[i]);
  }
  if (arr[i] === 0) {
    num.push(arr[i]);
    num.pop(arr[i]);
    num.pop(arr[i - 1]);
  }
}
if (num.length == 0) {
  console.log(0);
} else {
  console.log(num.reduce((a, b) => a + b));
}
