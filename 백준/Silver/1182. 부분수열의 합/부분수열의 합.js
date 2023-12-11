const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const [N, S] = input[0].split(" ").map(Number);
  const nums = input[1].split(" ").map(Number);
  const visited = new Array(N + 1).fill(false);
  const arr = [];
  let answer = 0;
  function dfs(count, start) {
    let sum = arr.reduce((acc, cur) => acc + cur, null);
    if (sum == S) {
      answer++;
    }

    for (let i = start; i < N; i++) {
      // if (visited[i] === true) continue;
      // visited[i] = true;
      arr.push(nums[i]);
      dfs(count, i + 1);
      arr.pop();
      // visited[i] = false;
    }
  }
  dfs(0, 0);
  return answer;
}
console.log(solution(input));
