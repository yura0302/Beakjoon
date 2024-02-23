function solution(numbers) {
    let answer = 0;
    let splitNum=numbers.split("").map((v)=>+v)
    let visited=Array(splitNum.length).fill(0);
    let setNum=new Set();


    const dfs=(depth,num)=>{
        if(depth===splitNum.length){
            if(num[0]!=="0"&&num.length!=0) setNum.add(Number(num));
        
        }else{
            for(let i=0; i<splitNum.length; i++){
                if(visited[i]!==0) continue;
                else{
                    visited[i]=1;
                    dfs(depth+1,num+splitNum[i])
                    visited[i]=0;
                    dfs(depth+1,num)
                }
            }
        }
    }
    dfs(0,'')
    const isPrime=(x)=>{
        if(x<2) return false;
        for(let i=2; i<=Math.sqrt(x); i++){
            if(x%i==0) return false
        }
        return true;
    }
    // for(let i=0; i<setNum.length; i++){
    //     if(isPrime(setNum.entries(i)==true) answer++
    // }
    for(let k of setNum) {
        if(isPrime(k)) answer++;
    }
    return answer;
}