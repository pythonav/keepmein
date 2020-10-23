import display from '../lib/display'
import locals from '../lib/globalVar';



// qrcode page
let qrcodeToTextCodeBtn=document.querySelector('.qr-code-to-text button');
qrcodeToTextCodeBtn.addEventListener('click',function(){
    display.toggleBlocks(locals.textcodeBlock,locals.qrcodeBlock);
});