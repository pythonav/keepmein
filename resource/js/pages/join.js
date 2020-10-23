import {getToken,submitToken} from '../services/token';
import display, { toggleBlocks } from '../lib/display';
import locals, { joinBlock, successBlock, textcodeBlock } from '../lib/globalVar';


import Cookies from 'js-cookie';

// join connection enter code page
let joinInputField=document.querySelector('.join-input input[type="text"]');
let joinBtn=document.querySelector('.join-input button');

joinBtn.addEventListener('click',function(){
    if(joinInputField.value.trim()!=""){
        let value=joinInputField.value.trim();
        let response= submitToken(value);
        response.then(results=>{
            if(results.data.session==null){
                console.log('still not session found');
            }else{
                console.log(results.data.session);
                Cookies.set('at',results.data.session);
                successFullyPaired();
            }
        });
        
    }
});
//successfully paird device and now we have Session Token:
function successFullyPaired(){
    toggleBlocks(successBlock,joinBlock);
}
