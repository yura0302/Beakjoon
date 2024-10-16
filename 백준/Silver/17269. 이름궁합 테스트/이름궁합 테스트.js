const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const [A, B] = input[1].split(" ").map(String);
let sum = [];
const num = [
  3, 2, 1, 2, 4, 3, 1, 3, 1, 1, 3, 1, 3, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1,
];
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let sumArr = "";
let maxLength = Math.max(N, M);

for (let i = 0; i < maxLength; i++) {
  if (i < N) {
    sumArr += A[i];
  }
  if (i < M) {
    sumArr += B[i];
  }
}

for (let i = 0; i < sumArr.length; i++) {
  let index = alphabet.indexOf(sumArr[i]);
  sum.push(num[index]);
}

while (sum.length > 2) {
  let temp = [];
  for (let i = 0; i < sum.length - 1; i++) {
    temp.push((sum[i] + sum[i + 1]) % 10);
  }
  sum = temp;
}
console.log(sum[0] == 0 ? `${sum[1]}` + "%" : `${sum[0]}${sum[1]}` + "%");
