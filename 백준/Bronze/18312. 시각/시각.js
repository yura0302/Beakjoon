const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const N = input[0];
const K = input[1];
let cnt = 0;

for (let i = 0; i <= N; i++) {
  for (let j = 0; j < 60; j++) {
    for (let k = 0; k < 60; k++) {
      let stringI = i.toString();
      let stringJ = j.toString();
      let stringK = k.toString();

      if (stringI.length === 1) stringI = "0" + stringI;
      if (stringJ.length === 1) stringJ = "0" + stringJ;
      if (stringK.length === 1) stringK = "0" + stringK;

      const time = stringI + stringJ + stringK;
      for (let x of time) {
        if (x === K.toString()) {
          cnt++;
          break;
        }
      }
    }
  }
}
console.log(cnt);
