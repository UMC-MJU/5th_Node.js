import mysql from "mysql2/promise";

const dbConnect = async () => {
    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "1234",
            database: "umc",
        });

        console.log("MySQL connection success");

        await queryExample(connection);

        await connection.end();
    } catch (error) {
        console.error("MySQL connection error:", error.message);
    }
};

const queryExample = async (connection) => {
    try {
        const [rows, fields] = await connection.execute("SELECT * FROM user");
        console.log("Query results:", rows);
    } catch (error) {
        console.error("Error executing query:", error.message);
    }
};

dbConnect();

