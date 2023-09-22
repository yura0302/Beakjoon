function solution(record) {
    let answer=[];
    const map={};
    
    for(let i=0; i<record.length; i++){
        const [state,uid,nickname]=record[i].split(" ");   
        
        if(state==="Leave"){
            answer.push([uid,"님이 나갔습니다."])
            continue;
        }
        if(state==="Enter"){
            answer.push([uid,"님이 들어왔습니다."])
        }
        map[uid]=nickname;
    }
    return answer.map(v=>map[v[0]]+v[1]);
}