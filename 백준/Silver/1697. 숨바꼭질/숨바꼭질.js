const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [N, K] = input.split(" ").map((v) => Number(v));

const visited = new Array(100001).fill(0);
let queue = [];

const bfs = () => {
  queue.push([N, 0]);
  visited[N] = 1;

  while (queue.length) {
    let [nowX, count] = queue.shift();

    if (nowX == K) return count;

    for (let x of [nowX - 1, nowX + 1, 2 * nowX]) {
      if (x >= 0 && x <= 100000 && visited[x] === 0) {
        visited[x] = 1;
        queue.push([x, count + 1]);
      }
    }
  }
};
console.log(bfs());
