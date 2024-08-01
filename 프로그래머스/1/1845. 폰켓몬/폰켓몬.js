function solution(nums) {
    let answer=[];
    let temp=nums.length/2;
    for(let i=0; i<nums.length; i++){
        if(answer.length<temp){
             if(!answer.includes(nums[i])){
            answer.push(nums[i])
            }
        }
    }
    return answer.length;
}