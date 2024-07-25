function solution(s){
    let pCnt=0;
    let yCnt=0;
    let lowerArr=s.toLowerCase().split("");
    for (let x of lowerArr){
        if(x=="p") pCnt++
        else if (x=="y") yCnt++
    }
    return pCnt==yCnt? true :false
}