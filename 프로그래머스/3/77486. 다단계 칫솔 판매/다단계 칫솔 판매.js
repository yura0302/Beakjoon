//map: enroll-profit -> 부모자식
//profit 각 사람들의 수익
function solution(enroll, referral, seller, amount) {
    const answer=[];
    const map=new Map();
    const profit=new Map();
    
    function dfs(node,start){
        if(node==="-"||start<1) {
            return;
        }
        const money=profit.get(node)|| 0;
        const value=map.get(node);
        profit.set(node,money+start-Math.floor(start*0.1))
        dfs(value,Math.floor(start*0.1));
    }
    //enroll을 순회-> 부모-자식관계
    for(let i=0; i<enroll.length; i++){
        let refer=referral[i];
        let enrol=enroll[i];
        map.set(enrol,refer)
    }
    // 판매이익 순회 -> 판매이익 나누기 
    for(let i=0; i<seller.length; i++){
        let sellerPerson=seller[i];
        let value=map.get(sellerPerson)|| [];
        let p=profit.get(sellerPerson)|| 0
        let price=amount[i]*100;
        profit.set(sellerPerson,p+price-Math.floor(price*0.1))
        dfs(value,Math.floor(price*0.1))
    }
    
    for(let i=0; i<enroll.length;i++){
        let value=profit.get(enroll[i]) || 0;
        answer.push(value);
    }
    return answer;
}