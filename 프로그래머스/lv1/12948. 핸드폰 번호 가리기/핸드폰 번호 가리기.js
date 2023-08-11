function solution(phone_number) {
    const arr=phone_number.length-4
    return "*".repeat(arr)+phone_number.substring(arr);
}