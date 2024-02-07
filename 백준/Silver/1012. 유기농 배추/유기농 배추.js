const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];
const T = Number(input.shift());
let answer = [];
let map;
let M, N, K;

for (let t = 0; t < T; t++) {
  let worm = 0;
  [M, N, K] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
  map = Array.from(Array(M), () => new Array(N).fill(0));

  for (let i = 0; i < K; i++) {
    let xy = input
      .shift()
      .split(" ")
      .map((v) => Number(v));
    map[xy[0]][xy[1]] = 1;
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] == 0) {
        continue;
      }
      bfs(i, j);
      worm++;
    }
  }
  answer.push(worm);
}
function bfs(startX, startY) {
  let queue = [[startX, startY]];
  while (queue.length) {
    const [x, y] = queue.shift();
    if (!map[x][y]) {
      continue;
    } else {
      map[x][y] = 0;
    }

    for (let i = 0; i < 4; i++) {
      let nx = dx[i] + x;
      let ny = dy[i] + y;
      if (nx >= 0 && ny >= 0 && nx < M && ny < N) {
        if (map[nx][ny] === 1) {
          queue.push([nx, ny]);
        }
      }
    }
  }
}
for (let a = 0; a < answer.length; a++) {
  console.log(answer[a]);
}
