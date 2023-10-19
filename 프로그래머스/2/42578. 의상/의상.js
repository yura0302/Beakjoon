function solution(clothes) {
    let answer=1;
    let cloth= new Map();
    for(let x in clothes){
        cloth.set(clothes[x][1], (cloth.get(clothes[x][1])||0)+1);
    }
    
    for(let [i,k] of cloth){
        answer*=k+1;
    }
return answer-1
}