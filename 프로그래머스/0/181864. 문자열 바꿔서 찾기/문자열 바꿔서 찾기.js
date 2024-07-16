function solution(myString, pat) {
    // let replaceMyString=[];
    // for (let i=0; i<myString.length; i++){
    //     replaceMyString+=myString[i]=="A"? "B":"A"
    // }
    // return replaceMyString.includes(pat)?1:0
    return [...myString].map((s)=>s==="A"?"B":"A").join("").includes(pat)?1:0
} 