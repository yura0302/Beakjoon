function solution(triangle) {
    let dp=triangle.slice();
    
    for(let i=triangle.length-2; 0<=i; i--){
        for(let j=0; j<dp[i].length; j++){
           dp[i][j]+= Math.max(dp[i+1][j],dp[i+1][j+1])
        }
    }
    return triangle[0][0];
}