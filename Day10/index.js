const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Corrected mongoose.connect section
mongoose.connect(`${process.env.MONGODB_URL}/SampleDB1`)
  .then(() => {
    console.log("Mongodb Connected Successfully")
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error)
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
