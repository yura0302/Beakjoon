const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const map = input.map((v) => v.split("").map(Number));
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let answer = [];

function bfs(start) {
  let queue = [start];
  let count = 0;
  while (queue.length) {
    const [startX, startY] = queue.shift();
    count++;
    for (let i = 0; i < 4; i++) {
      let nx = startX + dx[i];
      let ny = startY + dy[i];

      if (nx >= 0 && ny >= 0 && nx < N && ny < N && map[nx][ny] == 1) {
        map[nx][ny] = 0;
        queue.push([nx, ny]);
      }
    }
  }
  return count;
}
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] == 1) {
      map[i][j] = 0;
      answer.push(bfs([i, j]));
    }
  }
}
console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join("\n"));
