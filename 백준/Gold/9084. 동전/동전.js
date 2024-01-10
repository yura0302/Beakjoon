const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let T = +input.shift();

for (let i = 0; i < T; i++) {
  let N = +input.shift();
  let coin = input
    .shift()
    .toString()
    .split(" ")
    .map((v) => +v);
  let money = +input.shift();

  let dp = Array.from({ length: money + 1 }, () => 0);
  dp[0] = 1;

  for (let j = 0; j < N; j++) {
    for (let k = coin[j]; k <= money; k++) {
      dp[k] += dp[k - coin[j]];
    }
  }
  console.log(dp[money]);
}
