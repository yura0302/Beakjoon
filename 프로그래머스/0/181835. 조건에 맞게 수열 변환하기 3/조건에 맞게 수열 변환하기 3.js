function solution(arr, k) {
    for (let i=0; i<arr.length; i++){
        return k%2==1? arr.map((el)=>el*k) : arr.map((el)=>el+k)
}
}