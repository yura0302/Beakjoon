function solution(phone_book) {
  const sHTable={};
    for(let x of phone_book){
        sHTable[x]=true;
    }
    
    for(let x of phone_book){
        for(let i=1; i<x.length; i++){
            const pre=x.substring(0,i);
            if(sHTable[pre]){
                return false;
            }
        }
    }
    return true;
}
