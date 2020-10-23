var DB=require('./connection');
function insertData(data){
    let dbQuery=`INSERT INTO messages
     (id,created_at,updated_at,type,text,url,image_url,file_url,session_key)
      VALUES('',
      '${data.created_at}',
      '${data.type}',
      '${data.text}',
      '${data.url_id}',
      '${data.image_id}',
      '${data.file_id}',
      '${data.session_key}')`;
    return new Promise(function(resolve,reject){
        DB.query(dbQuery,function(error,results,fields){
            if(error==null){
                resolve(true);
            }else{
                throw Error("DbqueryERROR::messageModel"+error.message);
            }
        });
    })
}

module.exports={
    insertData  
}