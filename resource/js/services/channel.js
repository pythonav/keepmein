/**
 *  Get all messages
 *  clean channel delete all messages
 *  delete channel delete everything
 * 
 */

import axios from 'axios';



/**
 * 
 * Method:POST,URL:'/channel/all'
 * @returns {json} messages all  
 * @param {String} accessToken 
 */
function getAllMessages(accessToken){
    let formDataObj=new FormData();
    formDataObj.append('sessionToken',accessToken);
    let configObject={
        url:'/channel/all',
        method:'POST',
        data:formDataObj
    }
    let res=axios(configObject);
    return new Promise(function(resolve,reject){
        res.then((results)=>{
            console.log(results);
            resolve(results);
        });
    });
}

function cleanChannel(){

}

function deleteChannel(){

}
export{
    getAllMessages,cleanChannel,deleteChannel
};