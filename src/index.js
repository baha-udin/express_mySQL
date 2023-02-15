const express = require("express");
const usersRoutes = require("./routes/users.js");
const middlewareLogRequest = require("./middleware/logs.js")
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const dbPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'express_mysql',
});

const app = express();

app.use(middlewareLogRequest)

// Allow transfer data in json
app.use(express.json())

// handler userRoutes from routes/users.js
app.use("/users", usersRoutes);

app.use("/", (req, res) => {
  dbPool.execute('SELECT * from users', (err, rows,) => {
    if(err) {
      res.json({
        message: "connection failed"
      })
    }
    res.json({
      message: "connection success",
      data: rows
    })
  })
})

app.listen(4000, () => {
  console.log(`port berjalan di 4000`);
});
