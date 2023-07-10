//수정
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let count = Number(input[0]);
let answer = "";

for (let i = 1; i <= count; i++) {
  let num = input[i].split(" ");
  answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer);
