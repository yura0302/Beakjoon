function measure (num) {
    let cnt =0;
    for(let i=1; i<=num; i++){
        if(num%i===0){
            cnt+=1
        }
    }
    if(cnt%2===0){
        return num
    }else {
        return -num
    }
}

function solution(left, right) {
    let answer = 0;
    for(let i=left; i<=right; i++){
        answer+=measure(i)
    }
    return answer;
}