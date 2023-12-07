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
  const visited = new Array(N).fill(false);

  function dfs(count) {
    if (count === M) {
      answer += `${output.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < N; i++) {
      if (visited[i] === true) continue;
      visited[i] = true;
      output.push(i + 1);
      dfs(count + 1);
      output.pop();
      visited[i] = false;
    }
  }
  dfs(0);
  return answer;
}
console.log(solution(input));
