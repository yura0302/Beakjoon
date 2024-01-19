const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let arr1 = input[0].split("");
let arr2 = input[1].split("");

const dp = Array.from(Array(2000), () => Array());

for (let i = 0; i <= arr1.length; i++) {
  for (let j = 0; j <= arr2.length; j++) {
    dp[i][j] = 0;
  }
}

for (let i = 1; i <= arr1.length; i++) {
  for (let j = 1; j <= arr2.length; j++) {
    if (arr1[i - 1] === arr2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
}
console.log(dp[arr1.length][arr2.length]);
