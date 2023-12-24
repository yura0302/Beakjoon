const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = 0;
const S = input[0];
const T = input[1];

function dfs(depth) {
  if (S == depth) {
    answer = 1;
    return;
  }
  if (depth.length === 0) return;
  if (depth[depth.length - 1] == "A") dfs(depth.slice(0, depth.length - 1));
  if (depth[0] == "B") dfs([...depth.slice(1)].reverse().join(""));
}
dfs(T);
console.log(answer);
