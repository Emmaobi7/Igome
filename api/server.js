const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
const port = process.env.port || 5000;


app.listen(port, function(err) {
  if (err) console.log(err)
})
