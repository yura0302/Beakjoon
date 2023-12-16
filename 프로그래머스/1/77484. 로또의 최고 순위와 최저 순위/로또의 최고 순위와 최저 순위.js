function solution(lottos, win_nums) {
    let answer=[];
    let correct=lottos.filter(v => win_nums.includes(v)).length;
    let zero =lottos.filter(v=>v===0).length;
    let min=7-correct>=6?6:7-correct;
    let max=min-zero<1?1:min-zero;
    answer=[max,min]
    return answer;
}