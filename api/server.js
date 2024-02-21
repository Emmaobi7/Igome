require('dotenv').config();
const router = require('./routes/index')
const express = require('express')
const cors = require('cors')
const app = express()
const authMiddleware = require("./middlewares/authMiddleware")

app.use(cors())
app.use(express.json())
//app.use('/', authMiddleware)
app.use('/', router)



const port = process.env.PORT || 5000;

app.listen(port, function(err) {
  if (err) console.log(err)
})

module.exports = app;
