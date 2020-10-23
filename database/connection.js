const mysql =require("mysql");
const config={
    host:'localhost',
    port:3308 ,
    user:'root',
    password:'',
    database:'laravel',
}
var connection= mysql.createConnection(config);
module.exports=connection;
