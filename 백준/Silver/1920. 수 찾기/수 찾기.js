const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let Nnum = input[1].split(" ").map(Number);
const M = Number(input[2]);
let Mnum = input[3].split(" ").map(Number);
const answer = [];

Nnum.sort((a, b) => a - b);
Mnum.forEach((v) => {
  let start = 0;
  let end = Nnum.length - 1;
  let isNumberInArray = false;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (v < Nnum[mid]) {
      end = mid - 1;
    } else if (v > Nnum[mid]) {
      start = mid + 1;
    } else {
      isNumberInArray = true;
      break;
    }
  }
  if (isNumberInArray) answer.push(1);
  else answer.push(0);
});

console.log(answer.join("\n"));
