function alphaNumeric(length,isLowerCase){
    let value='';
    let arr='';
    if(isLowerCase){
        arr=[ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","1","2","3","4","5","6","7","8","9","0","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
       
    }else{
        arr=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","1","2","3","4","5","6","7","8","9","0"];
    }
    
    for(let i=0;i<length;i++){
        value=value+arr[Math.floor(Math.random()*arr.length)];
    }
    return value;

}
function numeric(length){
    let value='';
    let arr=["1","2","3","4","5","6","7","8","9","0"];
    for(let i=0;i<length;i++){
        value=value+array[Math.floor(Math.random()*arr.length)];
    }
    return value;

}
module.exports={
    numeric,alphaNumeric
}