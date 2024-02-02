const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const totalComputer = Number(input.shift());
const pairComputer = Number(input.shift());
const computers = input.map((v) => v.split(" ").map(Number));
let answer = 0;
let visited = Array(totalComputer + 1).fill(false);
let graph = [...Array(totalComputer + 1)].map(() => []);

computers.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const bfs = (start) => {
  let queue = [start];
  while (queue.length) {
    let node = queue.shift();
    if (visited[node]) continue;
    else {
      visited[node] = true;
      answer++;
      queue.push(...graph[node]);
    }
  }
};
bfs(1);
console.log(answer - 1);
