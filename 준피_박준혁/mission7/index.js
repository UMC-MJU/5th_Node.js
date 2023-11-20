const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '-',
  database : 'test'
});

connection.connect();

connection.query('SELECT * from user', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();