const mysql = require('mysql2/promise')
const express = require('express')()

express.listen(3000, () => {
    console.log('CONNECTED ON PORT 3000')
})

function queryTest() {
    const connection = mysql.createPool({
        host     : 'mysql-db',
        port     : '3306',
        user     : 'test',
        password : 'test',
        database : 'projects',
    });
    

    express.get('/', (req, res) => {
        connection.query("UPDATE libre SET imagem = 'https://m.media-amazon.com/images/I/51L7aRvbU-L._SL1322_.jpg' WHERE isbn=1545621;")

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
  

