const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
let answer = "";

for (let i = 0; i < N; i++) {
  let testCase = input.splice(0, 3);
  let isReverse = false;
  testCase[2] = testCase[2].slice(1, -1).split(",");

  for (let x of testCase[0]) {
    var flag = true;

    if (x == "R") isReverse = !isReverse;
    else if (x == "D") {
      if (testCase[1] == "0") {
        answer += "error\n";
        flag = !flag;
        break;
      }
      if (testCase[2].length == 0) {
        answer += "error\n";
        flag = !flag;
        break;
      }
      if (isReverse) testCase[2].pop();
      else testCase[2].shift();
    }
  }
  if (isReverse) testCase[2].reverse();
  if (flag) answer += "[" + testCase[2].join(",") + "]\n";
}
console.log(answer.trim());
