const mysql = require('mysql2/promise')
const express = require('express')()
require('dotenv').config()

express.listen(3000, () => {
    console.log('CONNECTED ON PORT 3000')
})

const connection = mysql.createPool({
    host     : 'mysql-db',
    port     : '3306',
    user     : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : 'projects',
});


express.get('/', (req, res) => {
    result = connection.query('SELECT * FROM libre').then((query) => {
        res.send(query)
    }).catch( ( err ) => {
        res.sendStatus(503)
        console.error(err)
    })
})   

  

