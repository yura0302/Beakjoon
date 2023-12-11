const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  [n, m] = input[0].split(" ");
  const N = Number(n);
  const M = Number(m);
  let answer = "";
  const output = [];
  const visited = new Array(N + 1).fill(false);
  const num = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  function dfs(count, start) {
    if (count === M) {
      answer += `${output.join(" ")}\n`;
      return;
    }
    let visitedNum = new Set();
    for (let i = start; i <= N; i++) {
      if (visited[i] === true || visitedNum.has(num[i - 1])) continue;
      // visited[i] = true;
      visitedNum.add(num[i - 1]);
      output.push(num[i - 1]);
      dfs(count + 1, i);
      output.pop();
      visited[i] = false;
    }
  }
  dfs(0, 1);
  return answer;
}
console.log(solution(input));
