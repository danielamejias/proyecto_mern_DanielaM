const { connect } = require('mongoose');
const mysql = require('mysql');
const connetion = mysql.createConnection({
     host:'localhost',
     user:'root@localhost',
     password:'',
     database:'mi gestor universidad'
});
connetion.connect((err)=>{
    if(err) throw err ;
    console.log(mysql =========> conexion 
});



