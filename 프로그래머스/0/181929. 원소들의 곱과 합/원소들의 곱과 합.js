function solution(num_list) {
    const plus_num=num_list.reduce((acc,cur)=>acc+cur)
    const multiple_num=num_list.reduce((acc,cur)=>acc*cur)
    const squared_num=Math.pow(plus_num,2)
    if(multiple_num<squared_num){
        return 1
    }else{
        return 0
    }
}