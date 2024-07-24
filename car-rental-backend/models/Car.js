const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  vehicleId: { type: String, unique: true },
  maker: String,
  model: String,
  rentalPrice: Number,
  availabilityStatus: { type: Boolean, default: true },
});

module.exports = mongoose.model('Car', CarSchema);
