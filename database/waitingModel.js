var DB=require('./connection');

/**
 * Insert Data in WaitingTable
 * @param {*} data 
 */
function insertData(data){
    let dbQuery=`insert into waiting 
            (id,created_at,token,status,session_cookie,device_details,allocated_session)
            VALUES('',
            '${data.created_at}',
            '${data.token}',
            '${data.status}',
            '${data.session_cookie}',
            '${data.device_details}',
            '${data.allocated_session}')`;
    
    return new Promise(function(resolve,reject){
        DB.query(dbQuery,function(error,results,fields){
            if(error==null){
                resolve(true)
            }else{
                resolve(false)
            }
        });
    });
}

/**
 * get allocated session 
 * 
 */
function getAllocatedSession(sessionId){
    let dbQuery=`SELECT allocated_session
     FROM waiting WHERE 
     session_cookie='${sessionId}'`;

    return new Promise(function(resolve,reject){
        DB.query(dbQuery,function(error,results,fields){
            if(error==null){
                resolve(results);
            }else{
                throw Error("DBqueryError::waitingModel");
            }
        });
    });

}


/**
 * check if someone is waiting with this 
 * token in waiting TABLE 
 * @param {*} token 
 */
function isSomeOneWaiting(token){
    
    let dbQuery=`SELECT COUNT(*) as count FROM waiting WHERE token = '${token}'`;
    return new Promise(function(resolve,reject){
        DB.query(dbQuery,function(error,results,fields){
           if(error!=null) throw Error("DBqueryError::table:waiting");
           if(results[0].count==0)
                resolve(false);
            else if(results[0].count>0)                
                resolve(true)
            else
                console.log("ln=>19:34,waitingModel.js");
        });
    });
}


/**
 * check if the requester is present in waiting table
 *  @param {string} token - token of the requeter
 *  @param {string} sessionCookie - session cookie of the requeter
 */
function amIWaiting(token,sessionCookie){
    let dbQuery=`SELECT COUNT(*) as count 
                              FROM waiting WHERE token = '${token}'
                              AND session_cookie='${sessionCookie}'` ;
    return new Promise(function(resolve,reject){
        DB.query(dbQuery,function(error,results,fields){
            if(error!=null){
                throw Error('DBQuery Error=>Waiting Table'+error.message);
            }
            if(results[0].count==0){
                resolve(false);
            }else{
                resolve(true);
            }
        });
    });
}

/**
 * 
 * update allocated session of already present user
 * 
 * @param {*} token 
 * @param {*} session_cookie 
 * @param {*} sessionKey - where session key not equals to requester session key
 */
function updateAllocatedSession(token,session_cookie,sessionKey){
let dbQuery=`UPDATE waiting SET allocated_session='${sessionKey}'
 WHERE token='${token}' AND session_cookie <> '${session_cookie}'`;

    return new Promise(function(resolve,reject){            
        DB.query(dbQuery,function(error,results,fields){
            if(error!=null)throw Error("DBqueryERROR:waitingmodel");
            if(error==null)resolve(true);
        })
    });
}

module.exports={
    insertData,isSomeOneWaiting,amIWaiting,updateAllocatedSession,getAllocatedSession
};