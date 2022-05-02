const sqlite3 = require('sqlite3');
const express = require('express');
const dataBase = new sqlite3.Database('accounts.db');
dataBase.run('CREATE TABLE IF NOT EXISTS users(username text primary key, fullName varchar(50), level text)')

const router = express.Router();

router.get("/", (req, res) => {
  dataBase.all('SELECT * FROM users', (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
})

router.post("/", (req, res) => {
  const query = dataBase.run('INSERT INTO users(username, fullName, level) VALUES(?, ?, ?)', req.query.fullName, req.query.level, req.query.username);
  res.status(200).send(query);
})

module.exports = router;
