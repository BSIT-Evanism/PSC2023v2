// server.js
const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '392002',
    database: 'seoul'
});

connection.connect();

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (error, results, fields) => {
        if (error) throw error;
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});