const mysql = require('mysql2/promise')
const express = require('express')()
require('dotenv').config()


express.listen(3000, () => {
    console.log('CONNECTED ON PORT 3000')
})

function queryTest() {
    const connection = mysql.createPool({
        host     : 'mysql-db',
        port     : '3306',
        user     : 'root',
        password : process.env.DB_PASSWORD,
        database : 'projects',
    });
    

    express.get('/', (req, res) => {
        result = connection.query('SELECT * FROM libre').then((query) => {
            res.send(query)
            console.log(query)
        })
    })
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
sleep(0).then(() => { 
    console.log('Node server is running')
    queryTest() 
});
  

