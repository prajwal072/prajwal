const express = require('express');
const mongoose = require('mongoose');
const Moviemodel = require('./moviemodel.js'); 
const app = express();
require('dotenv').config()

const port = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

  
app.post('/addmoviedata', async (req, res) => {
  try {
    const newdata = new Moviemodel(req.body);
    await newdata.save();
    res.send("Data saved successfully");
  } catch (err) {
    console.error("Data not saved", err);
    res.status(500).send("Failed to save data");
  }
});

mongoose
  .connect(`${process.env.MONGODB_URL}/SampleDB3`)
  .then(() => console.log("Mongodb Database Connected Successfully"))
  .catch((err) => console.error("Database Connection Failed", err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
