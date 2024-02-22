function solution(clothes) {
    let answer = 1;
    let hashMap=new Map();
    
    for(let [clothe, key] of clothes){
        if(hashMap.has(key)){
            hashMap.set(key,hashMap.get(key)+1);
        }else {
            hashMap.set(key,1);
        }
        }
        for(let x of hashMap.values()){
            answer*=(x+1);
        }
    answer-=1;
    return answer;
}