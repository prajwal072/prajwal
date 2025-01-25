const express = require('express');
const mongoose = require('mongoose');
const MobileModel = require('./mobilemodel.js'); 
const app = express();
require('dotenv').config()

const port = process.env.PORT || 3000;


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to the Mobile Data API!');
});


app.post('/addmobiledata', async (req, res) => {
  try {
    const newMobile = new MobileModel(req.body);
    res.send('Mobile data saved successfully!');
  } catch (err) {
    console.error('Mobile data not saved:', err);
    res.status(500).send('Failed to save mobile data. Please check your input.');
  }
});


mongoose
  .connect(`${process.env.MONGODB_URL}/SampleDB2`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Database Connected Successfully'))
  .catch((err) => console.error('Database Connection Failed:', err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
