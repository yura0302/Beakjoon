const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, ...arr] = input;
arr = arr.map((v) => v.split(" ").map((v) => Number(+v)));

let answer = "";
for (let i = 0; i < arr.length; i += 2) {
  let priority = arr[i + 1];
  let nowLocation = arr[i][1];
  let count = 0;
  while (true) {
    let max = Math.max(...priority);
    let reLocation = priority.shift(); //제거만
    if (reLocation === max) {
      count++;
      if (nowLocation === 0) {
        answer += count + "\n";
        break;
      }
    } else {
      priority.push(reLocation);
    }
    if (nowLocation === 0) {
      nowLocation = priority.length - 1;
    } else {
      nowLocation--;
    }
  }
}
console.log(answer.trim());
