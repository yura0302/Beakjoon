function solution(number, n, m) {
    // return  (number%n) && (number%m)===0?1:0
    return number%n===0 && number%m===0 ?1:0
}