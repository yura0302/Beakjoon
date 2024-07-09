function solution(arr, n) {
    if(arr.length%2===1){
        return arr.map((a,i)=>i%2===0? a+n:a)
    }else {
        return arr.map((a,i)=>i%2===1?a+n:a)
    }
}