// const express = require('express')   // common JS
import express from 'express'          // ES6
import mysql from 'mysql'

const app = express()
const port = 3000


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dbdpaTL1!',
  database : 'UMC'
});

connection.connect();

connection.query('SELECT * from User', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




