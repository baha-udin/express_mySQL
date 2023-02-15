const express = require("express");
const usersRoutes = require("./routes/users.js");
const middlewareLogRequest = require("./middleware/logs.js")


const app = express();

app.use(middlewareLogRequest)

// Allow transfer data in json
app.use(express.json())

// handler userRoutes from routes/users.js
app.use("/users", usersRoutes);

app.listen(4000, () => {
  console.log(`port berjalan di 4000`);
});
