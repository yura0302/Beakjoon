//index번호 필요
function solution(rank, attendance) {
    let answer = 0;
    let temp=[];
    for(let i=0; i<attendance.length; i++){
        if(attendance[i]===true){
            temp.push(rank[i])
            temp.sort((a,b)=>a-b)
            answer=10000*rank.indexOf(temp[0]) + 100*rank.indexOf(temp[1]) + rank.indexOf(temp[2])
        }
        else if(attendance[i]===false) {continue}
    }
    return answer;
}