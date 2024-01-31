const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const money = Number(input[0]);
const MachineDuck = input[1].split(" ").map((v) => +v);
const lastStock = MachineDuck[MachineDuck.length - 1];

function JunhyunProfit() {
  let JunhyunMoney = money;
  let Buying = Math.floor(money / MachineDuck[0]);
  JunhyunMoney = JunhyunMoney % MachineDuck[0];
  for (let i = 1; i < MachineDuck.length; i++) {
    if (JunhyunMoney >= MachineDuck[i]) {
      Buying += Math.floor(JunhyunMoney / MachineDuck[i]);
      JunhyunMoney = JunhyunMoney % MachineDuck[i];
    }
    if (i === MachineDuck.length - 1) {
      const JunhyunAsset = JunhyunMoney + Buying * lastStock;
      return JunhyunAsset;
    }
  }
}

function SeongminProfit() {
  let SeongminMoney = money;
  let SeongminBuying = 0;
  let arr = [];

  for (let i = 1; i < MachineDuck.length; i++) {
    if (MachineDuck[i - 1] < MachineDuck[i]) {
      arr.push("+");
    }
    if (MachineDuck[i - 1] > MachineDuck[i]) {
      arr.push("-");
    }
    if (MachineDuck[i - 1] === MachineDuck[i]) {
      arr.push("=");
    }
    let ThreeDays = arr.slice(i - 3, i);
    if (ThreeDays[0] === "-" && ThreeDays[1] === "-" && ThreeDays[2] === "-") {
      SeongminBuying += Math.floor(SeongminMoney / MachineDuck[i]);
      SeongminMoney = SeongminMoney % MachineDuck[i];
    }
    if (ThreeDays[0] === "+" && ThreeDays[1] === "+" && ThreeDays[2] === "+") {
      SeongminMoney += SeongminBuying * MachineDuck[i];
      SeongminBuying = 0;
    }
    if (i === MachineDuck.length - 1) {
      let SeongMinAsset = SeongminMoney + SeongminBuying * lastStock;
      return SeongMinAsset;
    }
  }
}

if (JunhyunProfit() > SeongminProfit()) console.log("BNP");
if (JunhyunProfit() < SeongminProfit()) console.log("TIMING");
if (JunhyunProfit() === SeongminProfit()) console.log("SAMESAME");
