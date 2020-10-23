const express=require('express');
const app=express();
const path=require('path');


global.__basedir=__dirname;
global.__routedir=path.join(__basedir,'/routes/');
global.__controllerdir=path.join(__basedir,'/http/controllers/');
global.__middlewaredir=path.join(__basedir,'/http/middleware/');


var apiRouter=require(__basedir+'/routes/api');
var indexRouter=require(__basedir+'/routes/indexRouter');

var bodyParser=require('body-parser');
var multer=require('multer');
var redis=require('redis');
var session=require('express-session');
let RedisStore=require('connect-redis')(session);
let redisClient=redis.createClient();


var upload=multer();
app.use(upload.array());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    store:new RedisStore({client:redisClient}),
    secret:'thisissecret',
    resave:false,
    saveUninitialized:false
}));
app.use('/api/v1',apiRouter);
app.use('/',indexRouter);

app.set('view engine','pug')
app.use('/public',express.static('public'));
//listening on port 3000
app.listen(3000,function(){
    console.log("Listening On Port 3000");
});
