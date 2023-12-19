const input = require("fs").readFileSync("/dev/stdin").toString();

let output = [];
function solution(input) {
  let n = Number(input);
  if (n <= 10) {
    return n;
  } else {
    for (let i = 0; i < 10; i++) {
      dfs(1, i);
    }
    output.sort((a, b) => a - b);
  }
  if (1022 < n) return -1;
  return output[n];
}

function dfs(depth, currentNumber) {
  if (depth > 10) return;
  output.push(currentNumber);
  for (let i = 0; i < currentNumber % 10; i++) {
    dfs(depth + 1, currentNumber * 10 + i);
  }
}
console.log(solution(input));
