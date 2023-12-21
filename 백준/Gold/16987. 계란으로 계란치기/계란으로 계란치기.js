const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let answer = 0;
let n = input.shift()[0];
let eggs = input;

function dfs(nowEgg) {
  if (nowEgg == n) {
    let broken = 0;
    for (let i = 0; i < n; i++) {
      if (eggs[i][0] <= 0) broken++;
    }
    answer = Math.max(broken, answer);
    return;
  }
  let flag = true;
  for (let i = 0; i < n; i++) {
    if (i == nowEgg) continue;
    if (eggs[nowEgg][0] <= 0 || eggs[i][0] <= 0) continue;
    flag = false;
    eggs[nowEgg][0] = eggs[nowEgg][0] - eggs[i][1];
    eggs[i][0] = eggs[i][0] - eggs[nowEgg][1];
    dfs(nowEgg + 1);
    eggs[nowEgg][0] = eggs[nowEgg][0] + eggs[i][1];
    eggs[i][0] = eggs[i][0] + eggs[nowEgg][1];
  }
  if (flag) dfs(nowEgg + 1);
}
dfs(0);
console.log(answer);
