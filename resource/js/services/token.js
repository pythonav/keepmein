import axios from 'axios';
var formData=require('form-data');
const getToken=async function() {
    const configObj={
        url:"/token/textcode",
        method:"GET",

    }
    let data=axios(configObj);
    
    return new Promise(function(resolve,reject){
        data.then(results=>{
            resolve(results);
        });
    });
}

const submitToken=async function(value){

    let bodyformData=new formData();
    bodyformData.append('token',value);
    const configObj={
        url:'/token/textcode',
        method:'POST',
        data:bodyformData
    };  
    let res=axios(configObj);
    return new Promise(function(resolve,reject){
        res.then(results=>{
            resolve(results);
        }); 
    });
}

export {
    getToken,submitToken
};