
//global variables
import local from './lib/globalVar';
import Cookies from 'js-cookie';
import {getAllMessages} from '../js/services/channel';



// Page Related imports

import welcome from './pages/welcome';
import qrcode from './pages/qrcode';
import textcode from './pages/textcode';
import join from './pages/join';
import chat from './pages/chat';


window.addEventListener('load',function(){
    if(Cookies.get('at')!=undefined){
        local.loadingBlock.classList.add('hidden');
        getAllMessages(Cookies.get('at'));
    }else{
        local.welcomeBlock.classList.remove('hidden');
        local.loadingBlock.classList.add('hidden');
    }
});








