const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));
const [n, m] = [...input];

function solution(n, m) {
  const answer = [];
  let seq = new Array(m).fill(0);
  function dfs(level, start) {
    if (level === m) {
      answer.push(seq.join(" "));
    } else {
      for (let i = start; i <= n; i++) {
        seq[level] = i;
        dfs(level + 1, i + 1);
      }
    }
  }
  dfs(0, 1);
  return answer.join("\n");
}
console.log(solution(n, m));
