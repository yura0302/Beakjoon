function solution(s){
    let answer=0;
    let tmp=0;
    
    for(let x of s){
        x==="(" ? tmp++ : tmp --;
        if(tmp<0){
            break;
        }
    }
    return tmp ===0 ?true : false;
}