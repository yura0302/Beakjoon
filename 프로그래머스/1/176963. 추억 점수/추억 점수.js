function solution(name, yearning, photo) {
    let answer = [];
    let temp={};
    
    for(let i=0; i<name.length; i++){
        temp[name[i]]=yearning[i]
    }
    return photo.map((arr)=>arr.reduce((acc,cur)=>acc+(temp[cur]||0),0))
}