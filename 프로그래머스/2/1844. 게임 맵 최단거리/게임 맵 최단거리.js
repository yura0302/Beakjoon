function solution(maps) {
    let dx=[-1,1,0,0];
    let dy=[0,0,1,-1];
    let yLength=maps[0].length;
    let xLength=maps.length;
    let goalY=maps[0].length-1;
    let goalX=maps.length-1;
    let queue=[[0,0,1]];
    while(queue.length){
        let [startX,startY,move]=queue.shift();
        if(startX===goalX&& startY===goalY) return move;
        for(let i=0; i<4; i++){
            let nx=dx[i]+startX;
            let ny=dy[i]+startY;
            if(nx>=0 && ny>=0 && nx<xLength && ny<yLength && maps[nx][ny]==1){
                queue.push([nx,ny,move+1]);
                maps[nx][ny]=0; 
            }
        }
    }
    return -1;
}