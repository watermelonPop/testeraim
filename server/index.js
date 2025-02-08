const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "shippo4444",
        database: "testerdatabase",
        port: 3306 // MySQL default port
});
    

app.post('/', (req, res) => {
    const sql = "INSERT INTO users (username) VALUES ('test name')";
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'An error occurred' });
        } else {
            console.log(result);
            res.status(200).json({ message: 'User inserted successfully' });
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
