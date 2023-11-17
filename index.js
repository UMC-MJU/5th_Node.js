import mysql from 'mysql2'
import express from 'express' //ES6
//const express = require('express') //commandJS

const app = express()
const port = 3000

//mysql과 연동 설정
const connection = mysql.createConnection({
  host  : 'localhost',
  user  : 'test',
  password  : '1234',
  database  : 'mission7_db'
});


connection.connect(err => {
  if (err) {
    console.error('데이터 베이스 연동 실패: ' + err.stack);
    return;
  }
  console.log('데이터베이스 연동 성공');
});

//기본 경로
app.get('/', (req,res) => {
  res.send('Hello, World!');
});

app.get('/user',(req,res) => {
  connection.query('SELECT user_id from user', (error,rows) => {
    if (error) throw error;
    console.log('User_id is ', rows);
    res.send(rows);
  });
});

//서버 시작
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
