const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const liquid = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let left = 0;
let right = n - 1;
let sum = 0;
let answer = "";
let temp = Number.MAX_SAFE_INTEGER;

while (left < right) {
  let sum = liquid[left] + liquid[right];
  if (temp > Math.abs(sum)) {
    temp = Math.abs(sum);
    answer = [liquid[left], liquid[right]];
  }

  if (sum < 0) {
    left++;
  } else {
    right--;
  }
}
console.log(answer.sort((a, b) => a - b).join(" "));
