const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [board, ...arr] = input;
const [n, m] = board.split(" ");
arr = arr.map((i) => i.split(""));
let answer = [];

const whiteboard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackboard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function WhiteBoard(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== whiteboard[i][j]) {
        count++;
      }
    }
  }
  return count;
}

function BlackBoard(x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i + x][j + y] !== blackboard[i][j]) {
        count++;
      }
    }
  }
  return count;
}

for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    answer.push(WhiteBoard(i, j));
    answer.push(BlackBoard(i, j));
  }
}
console.log(Math.min(...answer));
