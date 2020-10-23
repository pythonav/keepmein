
function getTimeStamp(){
    let d=new Date();
    let value=d.getFullYear()+"-"+d.getMonth()+"-"+ d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    return value;
}
module.exports={getTimeStamp};
