import display from '../lib/display'
import locals from '../lib/globalVar';


// welcome page

let welcomeCreateBtn=document.querySelector('.welcome-choice .connect button');
let welcomeJoinBtn=document.querySelector('.welcome-choice .create button');
welcomeCreateBtn.addEventListener('click',function(){
    display.toggleBlocks(locals.qrcodeBlock,locals.welcomeBlock);
});
welcomeJoinBtn.addEventListener('click',function(){
    display.toggleBlocks(locals.joinBlock,locals.welcomeBlock);
});
