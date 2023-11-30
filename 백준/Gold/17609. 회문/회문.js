const [_, ...words] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function checkPalindrome(word, left, right) {
  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else return false;
  }
  return true;
}

function solution(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else {
      if (
        checkPalindrome(word, left + 1, right) ||
        checkPalindrome(word, left, right - 1)
      )
        return 1;
      return 2;
    }
  }
  return 0;
}

const answer = [];
for (const word of words) answer.push(solution(word));
console.log(answer.join("\n"));
