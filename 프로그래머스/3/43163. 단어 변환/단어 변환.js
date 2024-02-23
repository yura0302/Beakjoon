function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    let answer = 0;
    let count=0;
    let queue=[[begin,count]];
    let visited=Array(words.length).fill(false);
    
    while(queue.length){
       let [nowWord,count]=queue.shift();
        if(nowWord===target) return count;
        
        for(let i=0; i<words.length; i++){
            if(isOneDiffer(nowWord,words[i]) && visited[i]==false){
                queue.push([words[i],count+=1]);
                visited[i]=true;
            }
            
        }
    }
    return count;
}
function isOneDiffer(nowWord,words){
    let differCount=0;
    for(let i=0; i<nowWord.length; i++){
        if(nowWord[i]!==words[i]) differCount++;
    }
    if(differCount==1){
        return true;
    }
    return false;
}