const path=require('path');
module.exports={
    entry:'./resource/js/index.js',
    output:{
        path:path.join(__dirname,'public/js'),
        filename:'main.js'
    }
}