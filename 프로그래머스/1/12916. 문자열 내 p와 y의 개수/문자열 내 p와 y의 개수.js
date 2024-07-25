function solution(s){
    let cnt=0;
    let lowerArr=s.toLowerCase().split("");
    for (let x of lowerArr){
        if(x==="p") cnt++
        else if (x==="y") cnt--
    }
    return cnt===0? true :false
}