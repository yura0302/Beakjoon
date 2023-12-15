const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const grouped = input.split(":");

const indexStart = grouped.findIndex((i) => i === "");
const indexEnd =
  grouped[indexStart + 1] === "" ? indexStart + 2 : indexStart + 1;
const count = 8 - (indexStart + (grouped.length - indexEnd));

const iPv6 =
  indexStart === -1
    ? grouped
    : [
        ...grouped.slice(0, indexStart),
        ...new Array(count).fill("0000"),
        ...grouped.slice(indexEnd),
      ];

const zero = iPv6.map((v) => "0".repeat(4 - v.length) + v);
console.log(zero.join(":"));
