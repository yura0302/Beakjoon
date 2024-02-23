function solution(citations) {
    let answer = 0;
    citations.sort((a,b)=>{
        return b-a;
    });
    let n=citations.length;
    
    for(let i=0; i<n; i++){
        if(i+1<=citations[i]){
            answer++;
        }
    }
    return answer;
}