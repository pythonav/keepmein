var DB=require('./connection');


//Insert data

function insertData(data){
    let dbQuery=`INSERT into token 
                (id,created_at,code,type,status)
                values('',
                '${data.created_at}',
                '${data.code}',
                '${data.type}',
                '${data.status}')`;
        return new Promise(function(resolve,reject){
            DB.query(dbQuery,function(error,results,fields){
                if(error==null){
                    resolve(true);
                }
            });
        });
}

// get data
 function getToken(){

}

// functions 
function isTokenExists(uniqueCode){

    let dbQuery=`SELECT code FROM token WHERE code = '${uniqueCode}'`;
        return new Promise(function(resolve,reject){
            DB.query(dbQuery,function(error,results,fields){
                if(error!=null)throw Error("DBqueryError::tokenTbl"+error.message);
                //if results is 0
                if(results.length==0){
                    resolve(false);
                }
                if(results.length>0){
                    resolve(true);
                }
            });
        });
}
module.exports={
    isTokenExists,insertData
};
