function solution(cards1, cards2, goal) {
    let answer = '';
    for(let x of goal){
        if(cards1[0]===x){
            cards1.shift()
        }else if (cards2[0]===x){
            cards2.shift()
        }else {
            return "No"
        }
    }
    return "Yes"
}