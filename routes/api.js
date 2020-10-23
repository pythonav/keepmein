/**
 *  route:: '/api/v1/ 
 *array  
 */
var express=require('express');
const tokensController = require('../http/controllers/TokensController');
var router=express.Router();




/**
 *  Route::'/api/v1/token/*'
 *  Controller:TokenController;
 */

 //* get text token
router.get('/token/text',(req,res)=>{
    tokensController.getTokenText(req,res);
});


//* get qr token
router.get('/token/qr',(req,res)=>{
    tokensController.getTokenQr(req,res);
});

//* submit token
router.post('/token',(req,res)=>{
    tokensController.submitToken(req,res);
});


module.exports=router;
