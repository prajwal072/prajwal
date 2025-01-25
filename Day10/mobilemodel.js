const mongoose = require('mongoose');

const MobileSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  releaseYear: { type: Number, required: true },
});

const MobileModel = mongoose.model('Mobile', MobileSchema);

module.exports = MobileModel;
