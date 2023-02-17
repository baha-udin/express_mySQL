require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require("express");
const usersRoutes = require("./routes/users.js");
const middlewareLogRequest = require("./middleware/logs.js");
const upload = require('./middleware/multer.js');

const app = express();

app.use(middlewareLogRequest)

// Allow transfer data in json
app.use(express.json())
// Allow express to read images
app.use("/assets", express.static('public/images'))

// Post photo
app.post('/upload', upload.single('photo'), (req, res) => {
  res.json({
    message: 'upload image was success'
  })
} )

// handler userRoutes from routes/users.js
app.use("/users", usersRoutes);

// general handling erros
app.use((err, req, res, next) => {
  res.json({
    message: err.message
  })
})

app.listen(PORT, () => {
  console.log(`port berjalan di ${PORT}`);
});
