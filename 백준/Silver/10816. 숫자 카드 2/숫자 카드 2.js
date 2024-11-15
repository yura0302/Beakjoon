const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const Nnums = input[1].split(" ").map(Number);
const M = Number(input[2]);
const cards = input[3].split(" ").map(Number);
const count = new Map();

for (let x of Nnums) {
  if (count.has(x)) {
    count.set(x, count.get(x) + 1);
  } else {
    count.set(x, 1);
  }
}
let answer = cards.map((v) => (count.has(v) ? count.get(v) : 0));
console.log(answer.join(" "));
