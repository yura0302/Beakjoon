const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map((el) => el.split(" ").map(Number));
const answer = [];

for (let i = 0; i < m - 2; i++) {
  for (let j = i + 1; j < m - 1; j++) {
    for (let k = j + 1; k < m; k++) {
      let sum = 0;
      arr.forEach((el) => (sum += Math.max(el[i], el[j], el[k])));
      answer.push(sum);
    }
  }
}
console.log(Math.max(...answer));
