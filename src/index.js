require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require("express");
const usersRoutes = require("./routes/users.js");
const middlewareLogRequest = require("./middleware/logs.js")

const app = express();

app.use(middlewareLogRequest)

// Allow transfer data in json
app.use(express.json())

// handler userRoutes from routes/users.js
app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`port berjalan di ${PORT}`);
});
