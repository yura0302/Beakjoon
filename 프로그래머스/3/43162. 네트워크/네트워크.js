function solution(n, computers) {
    let answer = 0;
    let visited=Array(n+1).fill(0);
    for (let i=0; i<n; i++){
        if (visited[i] == 0) {
            let queue=[i];
            visited[i]=1; 
            while(queue.length){
                let x=queue.shift();
                for(let j=0; j<n; j++){
                    if(x!==j && computers[x][j]!==0 && visited[j]==0){
                        visited[j]=1;   
                        queue.push(j)
                    }
                }
            }
            answer++;
        }
    }
    return answer;
}