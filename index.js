
const express = require('express')
const app = express()

const mysql = require('mysql')
const config = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password:'',
    database:'test_node'

})

config.connect((err) => {
    if(err) throw err;
    console.log('connect database')
})
 
app.get('/', function (req, res) {
  res.send('ioioioo')
})
 
app.get('/employee',function(req,res){
    config.query('SELECT * FROM employee',
    (error,response,fields)=>{
        res.send(response)
    })
}
)

app.listen(3000)