const path=require('path');
const {v4:uuidv4}=require('uuid');


const random=require(path.join(__basedir,'/http/lib/random'));
const dateTime=require(path.join(__basedir,'/http/lib/datetime'));


//Database Models
const tokenModel=require(path.join(__basedir,'/database/tokenModel'));
const waitingModel=require(path.join(__basedir,'/database/waitingModel'));
const activeModel=require(path.join(__basedir,'/database/activeModel'));
const sessionModel=require(path.join(__basedir,'/database/sessionModel'));
const messageModel=require(path.join(__basedir,'/database/messageModel'));



/**
 * 
 * @param {*} req 
 * @param {*} res 
 *  METHOD:GET
 *  PATH:/token/text 
 */

function getTokenText(req,res){
 let randomToken=random.alphaNumeric(8,false);
    (async()=>{
        let response=await tokenModel.isTokenExists(randomToken);
        if(!response){
            let insertObject={
                    id:'',
                    created_at:dateTime.getTimeStamp(),
                    type:'text',
                    code:randomToken,
                    status:'active'
            }
            await tokenModel.insertData(insertObject);
            res.send({
                msg:'hello',
                token:randomToken,
                obj:insertObject
            });
        }
    })();    
}


function getTokenQr(req,res){
    let randomToken=random.alphaNumeric(16,true);
    (async()=>{
        let response= await tokenModel.isTokenExists(randomToken);
        if(!response){
            let insertObject={
                    id:'',
                    created_at:dateTime.getTimeStamp(),
                    type:'qr',
                    code:randomToken,
                    status:'active'
            }
            await tokenModel.insertData(insertObject);
            res.send({
                msg:'success',
                token:randomToken,
                obj:insertObject
            });
        }
    })();    
}

function submitToken(req,res){
    (async()=>{
       let isTokenValid=await tokenModel.isTokenExists(req.body.token);
        if(isTokenValid){
            let isSomeoneWaiting=await waitingModel.isSomeOneWaiting(req.body.token);
            //check if someone is waiting with this token
            if(isSomeoneWaiting){
                let amIWaiting=await waitingModel.amIWaiting();
                if(amIWaiting){
                   res.send(JSON.stringify({msg:'you are waiting!'},2));
                }else{
                   res.send(JSON.stringify({msg:'someone else is waiting'},2));
                }
            }else{
                //no one is waiting insert this user to waiting table
                res.send(JSON.stringify({msg:'no one is waiting'},2));
            }
        }else{
            res.send({
                msg:'invalidToken',
            });
            return  
        }

    })();
}
module.exports={
    getTokenText,getTokenQr,submitToken
};
