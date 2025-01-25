const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  year: { type: Number, required: true },
});

const Moviemodel = mongoose.model('Movie', movieSchema);

module.exports = Moviemodel;
