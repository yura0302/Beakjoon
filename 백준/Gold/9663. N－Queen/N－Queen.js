let input = require("fs").readFileSync("/dev/stdin").toString().trim();
input = Number(input);

function solution(input) {
  let visited = Array.from(input).fill(0);
  let answer = 0;
  dfs(0);

  function dfs(x) {
    if (x === input) {
      answer++;
    } else {
      for (let i = 0; i < input; i++) {
        if (visited[x]) continue;
        visited[x] = i;
        // visited[x]=true;
        if (isPossible(x)) dfs(x + 1);
        visited[x] = 0;
        // visited[x]=false;
      }
    }
  }

  function isPossible(x) {
    for (let i = 0; i < x; i++) {
      if (visited[x] == visited[i]) return false;
      if (Math.abs(visited[x] - visited[i]) === x - i) return false;
    }
    return true;
  }
  return answer;
}
console.log(solution(input));
