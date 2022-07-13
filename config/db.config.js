const mysql = require('mysql');

//Create mysql connection
const dbConnect = mysql.createConnection({
    // host: process.env.DB_HOST,
    // user: process.env.DB_NAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_DATABASE
    host: 'localhost',
    user: 'root',
    password: '2002',
    database: 'foreigners',
});

dbConnect.connect(function(){
    console.log("Database Connected Successfully!");
})

module.exports = dbConnect;