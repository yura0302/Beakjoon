function solution(left, right) {
    let answer = 0;
    for(let i=left; i<=right; i++){
        Number.isInteger(Math.sqrt(i))==false ? answer+=i : answer-=i
    }
    return answer;
}