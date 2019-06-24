var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'tinuat@dwise',
  database: 'sys'
});

connection.connect(function(err) {
  if (!!err){
    console.log("Error!");
  } else {console.log("Connected!");
}
  
});
app.get('/employee',(req,res)=>{
    connection.query('SELECT * FROM employee',
    (err,row,column)=>{   
    if(!err) res.json(row);
       else
          res.status(400).json(err);
       
    });
});

app.listen(5000,()=>{
  console.log("listening to 5000 port....");
});
