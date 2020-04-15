const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 3306,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "burgers_db"
})