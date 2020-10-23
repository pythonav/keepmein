let leftTextTemplate=document.getElementById('leftTextTemplate');
let rightTextTemplate=document.getElementById('rightTextTemplate');
let messageObject=[
    {
        "created_at":"2020-09-07T02:17:34.000Z",
        "type":"text",
        "user":"other",
        "text":"Welcome to Keepme.in",
        "url":"",
        "image_url":"",
        "file_url":""
      },
    
    {
        "created_at":"2020-09-07T02:17:34.000Z",
        "type":"text",
        "user":"other",
        "text":"Welcome to Keepme.in",
        "url":"",
        "image_url":"",
        "file_url":""
      },
,
];

function generateChatTemplate(direction,image){
    
}
function populateChat(messageObject){
    let chatBlock=document.querySelector('.chat-history-wrapper');
    for(let i=0;i<messageObject.length;i++){
       chatBlock.insertAdjacentHTML('afterbegin',leftTextTemplate) 
    }
}



module.exports={populateChat};