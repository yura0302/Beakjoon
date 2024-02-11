const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [m, n] = input.shift().split(" ").map(Number); // m과 n의 순서를 바꿔줍니다.
let map = input.map((v) => v.split(""));
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let [white, blue] = [0, 0];

const bfs = (x, y) => {
  let count = 0;
  let queue = [[x, y]];
  let now = map[x][y];
  map[x][y] = 0;

  while (queue.length) {
    let [startX, startY] = queue.shift();
    count++;

    for (let i = 0; i < 4; i++) {
      let nx = startX + dx[i];
      let ny = startY + dy[i];

      if (nx >= 0 && ny >= 0 && nx < n && ny < m && map[nx][ny] == now) {
        // m과 n의 위치를 바꿔줍니다.
        map[nx][ny] = 0;
        queue.push([nx, ny]);
      }
    }
  }
  now === "W" ? (white += count ** 2) : (blue += count ** 2); // 동등 비교를 위해 ===를 사용합니다.
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j]) bfs(i, j);
  }
}
console.log(white + " " + blue);
