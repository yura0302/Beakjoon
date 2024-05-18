function solution(s){
    let number=s.split(" ").map(Number);
    
    let min =Math.min(...number);
    let max=Math.max(...number);
    
    return `${min} ${max}`
}