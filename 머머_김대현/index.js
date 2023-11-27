//import mysql from "mysql2/promise";
//
//const dbConnect = async () => {
//    try {
//        const connection = await mysql.createConnection({
//            host: "localhost",
//            user: "root",
//            password: "1234",
//            database: "surfing",
//        });
//
//        console.log("MySQL connection success");
//
//        await queryExample(connection);
//
//        await connection.end();
//    } catch (error) {
//        console.error("MySQL connection error:", error.message);
//    }
//};
//
//const queryExample = async (connection) => {
//    try {
//        const [rows, fields] = await connection.execute("SELECT * FROM user");
//        console.log("Query results:", rows);
//    } catch (error) {
//        console.error("Error executing query:", error.message);
//    }
//};
//
//dbConnect();

import express from 'express';
import { tempRouter } from './temp.route.js';
import {BaseError} from "./error.js";
import {response} from "./response.js";

const app = express();
const port = 3000;

// router setting
app.use('/temp', tempRouter);

app.use((req, res, next) => {
    const err = new BaseError(status.NOT_FOUND);
    next(err);
});

// error handling
app.use((err, req, res, next) => {
    // 템플릿 엔진 변수 설정
    res.locals.message = err.message;
    // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.data.status).send(response(err.data));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});