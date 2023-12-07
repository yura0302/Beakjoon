const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  [n, m] = input[0].split(" ");
  const N = Number(n);
  const M = Number(m);
  let answer = "";
  const arr = [];
  const visited = new Array(N).fill(false);

  function dfs(count, start) {
    if (count === M) {
      answer += `${arr.join(" ")}\n`;
      return;
    }

    for (let i = start; i < N; i++) {
      if (visited[i] === true) continue;
      visited[i] = true;
      arr.push(i + 1);
      dfs(count + 1, i);
      arr.pop();
      visited[i] = false;
    }
  }
  dfs(0, 0);
  return answer;
}

console.log(solution(input));
