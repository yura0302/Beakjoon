function solution(s) {
    var answer = '';
    let str=s.split(" ");
    return Math.min(...str)+" "+Math.max(...str) ;
}