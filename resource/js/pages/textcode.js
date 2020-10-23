import display, { toggleBlocks } from '../lib/display'
import locals, { successBlock, textcodeBlock } from '../lib/globalVar';
import {getToken,submitToken }  from '../services/token';


import Cookies from 'js-cookie';



// textcode page
let textcodeGenerateBtn=document.querySelector('.textcode-generate-btn button');
textcodeGenerateBtn.addEventListener('click',function(event){

    //get all variables
    let textcodeTitle=document.querySelector('.textcode-title');
    let textcodeGenerateTitle=document.querySelector('.textcode-generate-title');
    let textRedMessage=document.querySelector('.textcode-red-message');
    let textcodeTime=document.querySelector('.textcode-time');
    let textcodeTextBlock=document.querySelector('.textcode-text-code');
    let tokenFoundFlag=false;    
    let generatedToken=null;
    //token Using Async
    (async()=>{
        await getToken().then((result)=>{
            textcodeTextBlock.innerHTML=result.data.token;
            tokenFoundFlag=true;
            generatedToken=result.data.token;
        });
     })();

   
    display.toggleBlocks(textcodeTitle,textcodeGenerateTitle);
    display.toggleBlocks(textRedMessage,event.target);
    textcodeTextBlock.classList.remove('hidden');

    let textcodeEverySecond=setInterval(() => {
       let curVal=Number(textcodeTime.innerHTML);
       textcodeTime.innerHTML=curVal-1;

    }, 1000);
    
    let submitTokenEveryInterval=setInterval(()=>{
        if(tokenFoundFlag&&generatedToken!=null){
            let response= submitToken(generatedToken);
            response.then(results=>{
                if(results.data.session==null){
                    console.log('still not session found');
                }else{
                    console.log(results.data.session);
                    clearInterval(textcodeEverySecond);
                    clearInterval(submitTokenEveryInterval);
                    Cookies.set('at',results.data.session);
                    successFullyPaired();
                }
            });
        }
    },1000);

    setTimeout(function(){
        clearInterval(textcodeEverySecond);
        display.toggleBlocks(textcodeGenerateTitle,textcodeTitle);
        display.toggleBlocks(event.target,textRedMessage);
    },60000*2);

});
function successFullyPaired(){
    //clear all intervals
    toggleBlocks(successBlock,textcodeBlock);
}
