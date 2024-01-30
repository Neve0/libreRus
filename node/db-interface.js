let main = require('mysql');
let db_connected = false;

let connection = main.createPool({
    host     : '127.0.0.1',
    port     : '/var/run/mysqld/mysqld.sock',
    user     : 'test',
    password : 'test',
    database : 'libre'
}).promise();

const query = await connection.query("create table notes (title VARCHAR(255))");

const query2 = await connection.query("insert into notes values ('WONDERLAND', 'FORSEN')")

const result = await connection.query("select * from notes");
const rows = result[0]
console.loog(rows)

