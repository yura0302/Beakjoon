const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution() {
  const regex = /^(100+1+|01)+$/;
  if (input.match(regex)) {
    console.log("SUBMARINE");
  } else {
    console.log("NOISE");
  }
}

solution();
