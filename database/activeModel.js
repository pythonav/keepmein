var DB=require('./connection');
/**
 * Insert Data in active table 
 * @param {Object} data 
 */
function insertData(data){
    let dbQuery=`INSERT INTO active
     (id,created_at,code)
      VALUES('',
      '${data.created_at}',
      '${data.code}')`;



    return new Promise(function(resolve,reject){
        DB.query(dbQuery,function(error,results,fields){
            if(error==null){
                resolve(true);
            }else{
                resolve(false);
            }
            
        })    
    });
    
}

module.exports={
    insertData
}