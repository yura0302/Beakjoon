const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  let [l, c] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").sort();
  let visited = new Array(l + 1).fill(false);
  let output = [];
  let answer = [];
  let vowel = ["a", "e", "i", "o", "u"];

  function dfs(count, start) {
    if (count == l) {
      let cnt = 0;
      for (let i = 0; i < output.length; i++) {
        if (vowel.includes(output[i])) {
          cnt++;
        }
      }
      if (output.length - cnt >= 2 && cnt >= 1) {
        answer.push(output.join(""));
        return;
      }
    }

    for (let i = start; i <= c; i++) {
      if (visited[i] == true) continue;
      visited[i] = true;
      output.push(arr[i - 1]);
      dfs(count + 1, i);
      output.pop();
      visited[i] = false;
    }
  }
  dfs(0, 1);
  return answer;
}
console.log(solution(input).join("\n"));
