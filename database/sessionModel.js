var DB=require('./connection');
/**
 * insert data in SESSION table 
 * @param {*} data 
 */
function insertData(data){
  let dbQuery=`INSERT INTO session 
                (id,created_at,code,active_code)
                                        VALUES('',
                                        '${data.created_at}',
                                        '${data.code}',
                                        '${data.active_code}')`;  

    return new Promise(function(resolve,reject){
        DB.query(dbQuery,function(error,results,fields){
            if(error==null){
                resolve(true)        
            }else{
                resolve(false);
            }
        })
        
    })
}

module.exports={
    insertData
}