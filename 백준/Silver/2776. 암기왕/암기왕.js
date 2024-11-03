const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +input.shift();
let answer = [];

for (let i = 0; i < T; i++) {
  input.shift();
  const Nnum = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  input.shift();
  const Mnum = input.shift().split(" ").map(Number);
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
    isNumberInArray ? answer.push(1) : answer.push(0);
  });
}
console.log(answer.join("\n"));
