const express=require('express')
const router=express.Router();
const {v4:uuidv4}=require('uuid');
router.get('/',(req,res)=>{
    if(req.session.uid){
        return res.render('index',{value:req.session.uid});
        //j 
    }else{
        req.session.uid=uuidv4();
        return res.render('index',{value:req.session.uid});
    }
});

module.exports=router;